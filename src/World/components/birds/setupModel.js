/*
 * @Author: zhangbei zhangbei@myhexin.com
 * @Date: 2023-10-19 21:20:27
 * @LastEditors: zhangbei zhangbei@myhexin.com
 * @LastEditTime: 2023-10-23 21:25:20
 * @FilePath: /discoverthreejs/src/World/components/birds/setupModel.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { AnimationMixer } from "https://cdn.skypack.dev/three@0.132.2";

function setupModel(data) {
  const model = data.scene.children[0];
  // 提取飞行剪辑
  const clip = data.animations[0];
  // 控制每个鸟的模型
  const mixer = new AnimationMixer(model);
  // 创建动作，传入剪辑，将动作设置为播放
  const action = mixer.clipAction(clip);
  action.play();

  // 为每只鸟添加一个.tick方法，并在每一帧更新鸟的混合器，delta：前一帧渲染的时间量
  model.tick = (delta) => mixer.update(delta);

  return model;
}

export { setupModel };
