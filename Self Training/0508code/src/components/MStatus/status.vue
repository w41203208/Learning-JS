<template>
  <div>
    <section class="status-content">
      <section class="status-grid">
        <div
          v-for="(status, index) in statusList"
          :key="status.id"
          class="status-container"
          :class="[{ selected: selected == index + 1 }, 'status-card-' + index]"
          @click="(e) => statusClickHandleEvt(e, index)"
        >
          <div class="status-img-container">
            <img :src="status.imgSrc" alt="" />
          </div>
          <div
            class="status-remove"
            @click="(e) => statusRemoveClickHandleEvt(e, index)"
          >
            <img :src="cancel" alt="" />
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
    <section class="status-control">
      <button
        class="control-prev control-btn"
        @click="statusPrevClickHandleEvt"
      >
        往前
      </button>
      <button
        class="control-next control-btn"
        @click="statusNextClickHandleEvt"
      >
        往後
      </button>
      <button class="control-add control-btn">新增</button>
      <button class="control-edit control-btn">編輯圖像</button>
      <button class="control-ok control-btn" @click="closeModalHandleEvt">
        確定
      </button>
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
  methods: {
    moveScrollBar(x) {
      const content = document.querySelector('.status-content');
      const { width } = content.getBoundingClientRect();
      content.scrollLeft = x - width;
    },
    statusClickHandleEvt(e, index) {
      let variant = false;
      const prevLevel = this.currentLevel;
      this.currentLevel = index + 1;
      this.selected = this.currentLevel;
      if (this.currentLevel - prevLevel === 1) {
        variant = true;
      }
      this.statusList.map((s, sindex) => {
        if (sindex + 1 <= this.currentLevel) {
          if (variant) {
            this.statusList[sindex].complete = true;
          } else {
            setTimeout(() => {
              this.statusList[sindex].complete = true;
            }, (sindex - 1) * 400);
          }
        }
        if (sindex + 1 > this.currentLevel) {
          this.statusList[sindex].complete = false;
        }
      });
      const { x } = e.currentTarget.getBoundingClientRect();
      this.moveScrollBar(x);
    },
    statusNextClickHandleEvt() {
      let first = true;
      this.statusList.map((s, index) => {
        if (!s.complete && first) {
          first = false;
          this.currentLevel = index + 1;
        }
      });
      this.selected = this.currentLevel;
      this.statusList[this.currentLevel - 1]['complete'] = true;
      if (this.statusList.length === this.currentLevel) {
        return;
      }
      const { x } = document
        .querySelector(`.status-card-${this.currentLevel - 1}`)
        .getBoundingClientRect();
      this.moveScrollBar(x);
    },
    statusPrevClickHandleEvt() {
      this.statusList.map((s, index) => {
        if (s.complete) {
          this.currentLevel = index + 1;
        }
      });
      this.selected = this.currentLevel - 1;
      this.statusList[this.currentLevel - 1]['complete'] = false;
      if (this.currentLevel === 1) {
        return;
      }
      const { x } = document
        .querySelector(`.status-card-${this.currentLevel - 1}`)
        .getBoundingClientRect();
      this.moveScrollBar(x);
    },
    statusRemoveClickHandleEvt(e, idx) {
      e.stopPropagation();
      this.statusList.splice(idx, 1);
      if (idx + 1 === this.currentLevel) {
        this.currentLevel -= 1;
        this.selected = this.currentLevel;
      } else if (idx + 1 < this.currentLevel) {
        this.currentLevel -= 1;
        this.selected = this.currentLevel;
      }
    },
    closeModalHandleEvt() {
      this.$bvModal.hide('stuts-list-edit');
    },
  },
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
  padding-top: 20px;
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
      transform-origin: left;
      animation: timelineMove 0.4s forwards ease-in;
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
  @keyframes timelineMove {
    0% {
      transform: scaleX(0%);
    }
    100% {
      transform: scaleX(100%);
    }
  }
}

::-webkit-scrollbar {
  display: none;
}
</style>
