<template>
  <div class="feature-item-card" @click="onClick">
    <div class="card-main">
      <div class="icon" :style="{color: themeColor}">
        <fa-icon :icon="icon"/>
      </div>
      <h2 class="card-title">
        {{title}}
      </h2>
      <div class="description">{{description}}</div>
    </div>
    <div class="card-go-icon" :style="{color: themeColor}">
      <fa-icon icon="arrow-right"/>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'FeatureItemCard',
    props: {
      title: {
        type: String,
        default: '',
      },
      icon: {
        type: String,
        default: '',
      },
      themeColor: {
        type: String,
        default: '#484848',
      },
      description: {
        type: String,
        default: '',
      },
    },
    methods: {
      onClick() {
        this.$emit('click');
      },
    },
  };
</script>

<style scoped lang="scss">
  .feature-item-card {
    background: #FFF;
    padding: 12px 18px 24px;
    border-radius: 8px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
    transition: all .1s ease-in-out;

    &:hover, &:focus {
      box-shadow: 0 2px 10px 0 rgba(0, 0, 0, .2);

    }
  }

  .icon {
    font-size: 42px;
  }

  .card-title {
    font-size: 24px;
    font-weight: 400;
    margin-top: 8px;
    margin-bottom: 8px;
  }

  .description {
    font-size: 14px;
    color: #8c939d;
  }

  .feature-item-card {
    display: flex;
    justify-content: space-between;
  }

  .card-go-icon {
    font-size: 32px;
    display: flex;
    align-items: flex-end;
  }
</style>
