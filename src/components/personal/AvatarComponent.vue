<template>
  <div class="avatar-container">
    <div class="avatar-flip">
      <div class="avatar-img front"></div>
      <div class="avatar-img back"></div>
    </div>
  </div>
</template>

<style scoped>
.avatar-container {
  display: inline-block;
  position: relative;
}

.avatar-container:hover .avatar-flip {
  transform: rotateY(180deg);
}

.avatar-flip,
.avatar-img {
  --avatar-size: 150px;
  width: var(--avatar-size);
  height: var(--avatar-size);
}

@media (min-width: 1200px) {
  .avatar-flip,
  .avatar-img {
    --avatar-size: 220px;
  }
}

.avatar-flip {
  position: relative;
  transition: 0.5s;
  transform-style: preserve-3d;
}

.avatar-img {
  border-radius: 50%;
  border: 1px solid var(--color-border);
  position: absolute;
  backface-visibility: hidden;
  background-position: center;
  background-origin: border-box;
  background-clip: border-box;
  background-size: contain;
  background-repeat: no-repeat;
}

.front {
  z-index: 2;
  transform: rotateY(0deg);
  background-image: url("../../assets/images/sschmid.jpeg");
}

.back {
  z-index: 1;
  transform: rotateY(180deg);
  background-image: url("../../assets/images/coding.gif");
}
</style>
