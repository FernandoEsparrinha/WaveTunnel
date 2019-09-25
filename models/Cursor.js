// texture for the particle
let particle_texture = null;

// variable holding our particle system
let ps = null;

var Particle = function(position) {
  this.acceleration = createVector(0, 0.03);
  this.velocity = createVector(random(-1,1), random(-1, 0));
  this.position = position.copy();
  this.lifespan = 200.0;
};

Particle.prototype.run = function() {
  this.update();
  this.display();
};

// Method to update position
Particle.prototype.update = function(){
  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
  this.lifespan -= 2;
};

// Method to display
Particle.prototype.display = function() {
  stroke(255, this.lifespan);
  strokeWeight(0);
  fill(30, 144, 255, this.lifespan);
  ellipse(this.position.x, this.position.y, 3, 3);
};

// Is the particle still useful?
Particle.prototype.isDead = function(){
  if (this.lifespan < 0) {
    return true;
  } else {
    return false;
  }
};

var ParticleSystem = function(position) {
  this.origin = position.copy();
  this.particles = [];
};

ParticleSystem.prototype.updatePosition = function(x, y) {
  this.origin = createVector(x, y);
};

ParticleSystem.prototype.addParticle = function() {
  this.particles.push(new Particle(this.origin));
};

ParticleSystem.prototype.run = function() {
  for (var i = this.particles.length-1; i >= 0; i--) {
    var p = this.particles[i];
    p.run();
    if (p.isDead()) {
      this.particles.splice(i, 1);
    }
  }
};