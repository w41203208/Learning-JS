<template>
  <div>
    <section class="status-content">
      <section class="status-grid">
        <div
          v-for="(status, index) in statusList"
          :key="status.id"
          class="status-container"
          :class="[{ selected: selected == index + 1 }]"
        >
          <div class="status-img-container">
            <img :src="status.imgSrc" alt="" />
          </div>
          <p class="status-text">{{ status.text }}</p>
        </div>
      </section>
      <section class="status-grid2">
        <div
          v-for="(_, index) in statusList"
          :key="_.id + index"
          class="progress-item"
          :class="[_.complete ? 'done' : 'undo']"
        >
          <div class="status-line"></div>
        </div>
      </section>
    </section>
  </div>
</template>

<script>
import write from '../../assets/images/status/writing.png';
import cancel from '../../assets/images/status/cancel.png';

export default {
  name: 'ming-status',
  props: [],
  data() {
    return {
      cancel,
      currentLevel: 0,
      selected: 1,
      statusList: [
        {
          id: new Date().toISOString() + 4,
          level: 1,
          text: '寫作業',
          imgSrc: write,
          complete: true,
        },
        {
          id: new Date().toISOString() + 9,
          level: 2,
          text: '訂正',
          imgSrc: write,
          complete: false,
        },
        {
          id: new Date().toISOString() + 45,
          level: 3,
          text: '閱讀',
          imgSrc: write,
          complete: false,
        },
        {
          id: new Date().toISOString() + 6,
          level: 4,
          text: '上機',
          imgSrc: write,
          complete: false,
        },
        {
          id: new Date().toISOString() + 1,
          level: 5,
          text: '訂正',
          imgSrc: write,
          complete: false,
        },
        {
          id: new Date().toISOString() + 2,
          level: 6,
          text: '複習成功',
          imgSrc: write,
          complete: false,
        },
      ],
    };
  },
  emit: [],
  methods: {},
  mounted() {},
};
</script>

<style lang="scss" scoped>
.status-content {
  overflow-x: scroll;
}
.status-grid2 {
  display: flex;
}
.status-grid {
  display: flex;
  .status-container {
    position: relative;
    min-width: 120px;
    flex-direction: column;
    justify-content: center;
    cursor: pointer;
    padding: 5px 5px;
    border-radius: 7px;
    border: 2px solid white;
    margin-right: 20px;
    &:last-child {
      margin-right: 0px;
    }
    // &.done{
    //   border: 2px solid rgb(214, 43, 43);
    // }
    &.selected {
      border: 2px solid rgb(214, 43, 43);
    }
    .status-img-container {
      width: 100%;
      height: 90px;
      & > img {
        width: 100%;
        height: 100%;
      }
    }
    .status-remove {
      position: absolute;
      right: -15px;
      top: -15px;
      width: 20px;
      height: 20px;
      & > img {
        width: 100%;
        height: 100%;
      }
    }
    .status-text {
      margin-top: 5px;
      text-align: center;
      font-size: 16px;
      font-weight: 600;
    }
  }
}
.status-control {
  margin-top: 50px;
  margin-bottom: -40px;
  display: flex;
  justify-content: space-between;
  .control-btn {
    width: 110px;
    font-size: 18px;
    padding: 7px 10px;
    border: 0px;
    border-radius: 3px;
    background-color: rgb(252, 142, 40);
    color: white;
    &:last-child {
      background-color: #309398;
    }
  }
}
.progress-item {
  margin-right: 20px;
  position: relative;
  min-width: 120px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
  &:first-child {
    &::before {
      position: relative;
      content: '';
      left: 0px;
      width: 10px;
      height: 10px;
      background: rgb(187, 187, 187);
    }
    .status-line {
      display: none;
    }
    &::after {
      display: none;
    }
  }
  .status-line {
    position: absolute;
    height: 2px;
    z-index: -1;
    background: rgb(187, 187, 187);
    position: absolute;
    right: calc(50% + 5px);
    width: calc(100% + 10px);
    height: 2px;
  }
  &.done {
    &::before {
      position: relative;
      content: '';
      width: 10px;
      height: 10px;
      background: rgb(0, 0, 0);
      border-radius: 10px;
      transition: all 0.3s 0.3s ease-in;
    }
    &::after {
      transform: scaleX(100%);
      transform-origin: left;
    }
  }
  &::before {
    position: relative;
    content: '';
    width: 10px;
    height: 10px;
    background: rgb(187, 187, 187);
    border-radius: 10px;
  }
  &::after {
    position: absolute;
    content: '';
    transform: scaleX(0%);
    background: black;
    right: calc(50% + 5px);
    width: calc(100% + 10px);
    height: 2px;
  }
}

::-webkit-scrollbar {
  display: none;
}
</style>
