
// Therapy Mode Audio Service
// Focuses on soothing, ambient, and soft sounds using Web Audio API

class AudioService {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = false;
  private droneNodes: OscillatorNode[] = [];
  private droneGain: GainNode | null = null;

  constructor() {
    // Context initialized on first user interaction
  }

  private getContext() {
    if (!this.ctx) {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioContextClass) {
        this.ctx = new AudioContextClass();
        // Start ambient drone gently
        this.startDrone();
      }
    }
    return this.ctx;
  }

  public setMuted(muted: boolean) {
    this.isMuted = muted;
    if (this.droneGain) {
      const now = this.ctx?.currentTime || 0;
      // Smooth fade
      this.droneGain.gain.linearRampToValueAtTime(muted ? 0 : 0.03, now + 1);
    }
  }

  public resume() {
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    // Ensure drone is playing if context was suspended
    if (this.droneNodes.length === 0 && !this.isMuted) {
      this.startDrone();
    }
  }

  // --- Ambient Drone Generator (Therapy Background) ---
  private startDrone() {
    if (!this.ctx || this.isMuted) return;
    
    // Create a binaural-ish drone
    const freqs = [110, 110.5, 164.81, 220]; // A2, E3, A3
    this.droneGain = this.ctx.createGain();
    this.droneGain.gain.value = 0.03; // Very quiet background
    this.droneGain.connect(this.ctx.destination);

    freqs.forEach(f => {
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      osc.type = 'triangle';
      osc.frequency.value = f;
      
      // Filter to make it warm
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.value = 400;

      osc.connect(filter);
      filter.connect(this.droneGain as GainNode);
      osc.start();
      this.droneNodes.push(osc);
    });
  }

  // --- Sound Effects (Soft & Reverb-y) ---

  // Soft "Water Drop" sound for picking up tiles
  public playPop() {
    if (this.isMuted) return;
    const ctx = this.getContext();
    if (!ctx) return;

    const t = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(800, t);
    osc.frequency.exponentialRampToValueAtTime(400, t + 0.15);

    // Softer attack, reasonable release
    gain.gain.setValueAtTime(0, t);
    gain.gain.linearRampToValueAtTime(0.15, t + 0.02); 
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.3);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(t);
    osc.stop(t + 0.3);
  }

  // "Soft Thud" / Wood block for dropping
  public playDrop() {
    if (this.isMuted) return;
    const ctx = this.getContext();
    if (!ctx) return;

    const t = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    // Low sine for body
    osc.type = 'sine';
    osc.frequency.setValueAtTime(200, t);
    osc.frequency.linearRampToValueAtTime(100, t + 0.1);

    gain.gain.setValueAtTime(0, t);
    gain.gain.linearRampToValueAtTime(0.15, t + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.15);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(t);
    osc.stop(t + 0.15);
  }

  // "Zen Bell" for Success/Match
  public playSuccess() {
    if (this.isMuted) return;
    const ctx = this.getContext();
    if (!ctx) return;

    const t = ctx.currentTime;
    
    // Pentatonic chord
    const notes = [523.25, 659.25, 783.99, 1046.50]; // C, E, G, C
    
    notes.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.type = 'triangle'; // Richer tone
      osc.frequency.value = freq;
      
      const start = t + (i * 0.08); // Arpeggiated
      
      // Long release for "Bell" effect
      gain.gain.setValueAtTime(0, start);
      gain.gain.linearRampToValueAtTime(0.1, start + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.001, start + 2.0); // 2 seconds tail

      // Filter modulation for shimmer
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(500, start);
      filter.frequency.linearRampToValueAtTime(3000, start + 0.2);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);
      osc.start(start);
      osc.stop(start + 2.0);
    });
  }

  // "Magical Swell" for Merging
  public playMerge() {
    if (this.isMuted) return;
    const ctx = this.getContext();
    if (!ctx) return;
    const t = ctx.currentTime;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(200, t);
    osc.frequency.linearRampToValueAtTime(600, t + 1.0); // Slow rise

    gain.gain.setValueAtTime(0, t);
    gain.gain.linearRampToValueAtTime(0.2, t + 0.5);
    gain.gain.linearRampToValueAtTime(0, t + 1.5);

    // Add vibrato
    const lfo = ctx.createOscillator();
    lfo.frequency.value = 6;
    const lfoGain = ctx.createGain();
    lfoGain.gain.value = 20;
    lfo.connect(lfoGain);
    lfoGain.connect(osc.frequency);
    lfo.start(t);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(t);
    osc.stop(t + 1.5);
  }

  // Soft "Dissonance" for error
  public playError() {
    if (this.isMuted) return;
    const ctx = this.getContext();
    if (!ctx) return;
    const t = ctx.currentTime;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(150, t);
    
    // Low pass to take the edge off
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 300;

    gain.gain.setValueAtTime(0.1, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.3);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);
    osc.start(t);
    osc.stop(t + 0.3);
  }
}

export const audio = new AudioService();
