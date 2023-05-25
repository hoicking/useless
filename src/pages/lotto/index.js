import { useRef, useState } from 'react'
import { styled } from '@stitches/react'
import { useTrail, animated } from '@react-spring/web'

import styles from './index.module.scss'


const SharedStyles = {
  width: '100%',
  height: '100%',
  position: 'absolute',
  inset: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: 'Helvetica',
  fontWeight: 800,
  backfaceVisibility: 'hidden',
}

const FrontBox = styled(animated.div, {
  ...SharedStyles,
  backgroundColor: '#fafafa',
  border: 'solid 2px #1a1a1a',
})

const BackBox = styled(animated.div, {
  ...SharedStyles,
  backgroundColor: 'rgb(40, 215, 159)',
  border: 'solid 2px rgb(40, 215, 159)',
  color: '#fafafa',
})

function generateLotto() {
  const redBalls = Array.from({ length: 35 }, (_, i) => i + 1);
  const blueBalls = Array.from({ length: 12 }, (_, i) => i + 1);
  const selectedRedBalls = [];
  const selectedBlueBalls = [];

  // 随机选取 5 个红球
  for (let i = 0; i < 5; i++) {
    const index = Math.floor(Math.random() * redBalls.length);
    selectedRedBalls.push(redBalls[index]);
    redBalls.splice(index, 1);
  }

  // 随机选取 2 个蓝球
  for (let i = 0; i < 2; i++) {
    const index = Math.floor(Math.random() * blueBalls.length);
    selectedBlueBalls.push(blueBalls[index]);
    blueBalls.splice(index, 1);
  }

  return {
    redBalls: selectedRedBalls.sort((a, b) => a - b),
    blueBalls: selectedBlueBalls.sort((a, b) => a - b)
  };
}

export default function Index() {

  const lotto = generateLotto()
  const [items, setItem] = useState([...lotto.redBalls, ...lotto.blueBalls])

  const [trail, api] = useTrail(items.length, () => ({
    rotateX: 0,
  }))

  const isFlipped = useRef(false)

  const handleClick = () => {
    if (isFlipped.current) {
      api.start({
        rotateX: 0,
      })
      isFlipped.current = false
    } else {
      const refresh = generateLotto()

      setItem([...refresh.redBalls, ...refresh.blueBalls])
      api.start({
        rotateX: 180,
      })
      isFlipped.current = true
    }
  }

  return (
    <div className={styles.main}>
      <div className={styles.container} onClick={handleClick}>
        {trail.map(({ rotateX }, i) => (
          <div className={styles.box} key={i}>
            <FrontBox
              key={items[i]}
              style={{
                transform: rotateX.to(val => `perspective(600px) rotateX(${val}deg)`),
                transformStyle: 'preserve-3d',
              }}>
              {'?'}
            </FrontBox>
            <BackBox
              style={{
                transform: rotateX.to(val => `perspective(600px) rotateX(${180 - val}deg)`),
                transformStyle: 'preserve-3d',
                borderColor: i === items.length - 1 || i === items.length - 2 ? 'lightgoldenrodyellow' : '' 
              }}>
              {items[i]}
            </BackBox>
          </div>
        ))}
      </div>
    </div>
  )
}
