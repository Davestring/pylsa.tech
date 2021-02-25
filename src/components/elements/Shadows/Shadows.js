const Shadow = (n) => {
  let val = `${Math.random() * 2000}px ${Math.random() * 2000}px #FFF`;
  for (let i = 2; i <= n; i++) {
    val = `${val}, ${Math.random() * 2000}px ${Math.random() * 2000}px #FFF`;
  }

  return val;
};

export const SmShadow = Shadow(700);

export const MdShadow = Shadow(200);

export const LgShadow = Shadow(100);
