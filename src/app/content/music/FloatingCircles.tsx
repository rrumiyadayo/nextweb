import { motion } from "framer-motion";

const ball = {
  // width: 200,
  // height: 200,
  // borderRadius: "50%",
  // background: "radial-gradient(circle at 50% 50%, #ff7f50, #ff6347)",

  width: 100,
  height: 100,
  borderRadius: "50%",
  backgroundColor: "blue",
  position: "absolute", // 画面下から出現させるために必要
  bottom: 0, // 画面下からの開始位置
  left: "15%", // 中央寄せ
  translateX: "-30%", // 中央寄せのための調整
};

export default function FloatingCircle() {
  return (
    <div className="floating-circle fixed inset-0 -z-40 pointer-events-none">
      <motion.div
        style={ball}
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: -200, opacity: 1 }}
        transition={{
          y: { duration: 0.3, ease: "easeOut" }, // y軸移動のアニメーション設定
          opacity: { duration: 0.15, delay: 0.15 }, // 透明度のアニメーション設定
        }}
        exit={{ opacity: 0, transition: { duration: 0.5, delay: 0.5 } }} // 画面から消える時のアニメーション
      />
    </div>
  );
}
