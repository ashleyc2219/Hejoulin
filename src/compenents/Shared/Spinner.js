import React from 'react'
import { motion, useAnimation } from 'framer-motion'

const Spinner = () => {
  return (
    <svg width="70" height="70" viewBox="0 0 70 70" className='Spinner'>
      <motion.path
        style={{
          fill: '#3D4349',
        }}
        d="M52.8405 25.1293C51.5961 23.0913 51.5763 21.0414 53.5856 17.7419C55.5949 14.4425 52.358 14.0637 52.358 14.0637L46.578 14.1196C46.578 14.1196 43.349 14.5608 45.4217 17.8208C47.4944 21.0809 47.5142 23.1307 46.3094 25.1924C45.1046 27.2541 39.4809 36.7386 40.3805 45.3402C41.28 53.9417 44.9657 55.1361 44.9657 55.1361C44.9657 55.1361 46.6064 55.9403 49.872 55.9087C53.1376 55.8772 54.7624 55.0415 54.7624 55.0415C54.7624 55.0415 58.4243 53.7761 59.1576 45.1588C59.8908 36.5415 54.0849 27.1673 52.8405 25.1293Z"
        animate={{
          d: [
            'M52.8405 25.1293C51.5961 23.0913 51.5763 21.0414 53.5856 17.7419C55.5949 14.4425 52.358 14.0637 52.358 14.0637L46.578 14.1196C46.578 14.1196 43.349 14.5608 45.4217 17.8208C47.4944 21.0809 47.5142 23.1307 46.3094 25.1924C45.1046 27.2541 39.4809 36.7386 40.3805 45.3402C41.28 53.9417 44.9657 55.1361 44.9657 55.1361C44.9657 55.1361 46.6064 55.9403 49.872 55.9087C53.1376 55.8772 54.7624 55.0415 54.7624 55.0415C54.7624 55.0415 58.4243 53.7761 59.1576 45.1588C59.8908 36.5415 54.0849 27.1673 52.8405 25.1293Z',
            'M41.7153 26.6592C39.5688 25.6129 38.4475 23.8968 38.3622 20.0346C38.2768 16.1724 35.346 17.5976 35.346 17.5976L30.507 20.7593C30.507 20.7593 28.0247 22.8709 31.5274 24.5003C35.0301 26.1296 36.1514 27.8457 36.2475 30.2317C36.3435 32.6177 36.717 43.6378 42.1099 50.3989C47.5027 57.16 51.2511 56.1801 51.2511 56.1801C51.2511 56.1801 53.0666 55.9735 55.8005 54.1872C58.5344 52.4009 59.4528 50.8213 59.4528 50.8213C59.4528 50.8213 61.8557 47.7821 57.8298 40.1278C53.804 32.4736 43.8618 27.7054 41.7153 26.6592Z',
            'M52.8405 25.1293C51.5961 23.0913 51.5763 21.0414 53.5856 17.7419C55.5949 14.4425 52.358 14.0637 52.358 14.0637L46.578 14.1196C46.578 14.1196 43.349 14.5608 45.4217 17.8208C47.4944 21.0809 47.5142 23.1307 46.3094 25.1924C45.1046 27.2541 39.4809 36.7386 40.3805 45.3402C41.28 53.9417 44.9657 55.1361 44.9657 55.1361C44.9657 55.1361 46.6064 55.9403 49.872 55.9087C53.1376 55.8772 54.7624 55.0415 54.7624 55.0415C54.7624 55.0415 58.4243 53.7761 59.1576 45.1588C59.8908 36.5415 54.0849 27.1673 52.8405 25.1293Z',
            'M52.8405 25.1293C51.5961 23.0913 51.5763 21.0414 53.5856 17.7419C55.5949 14.4425 52.358 14.0637 52.358 14.0637L46.578 14.1196C46.578 14.1196 43.349 14.5608 45.4217 17.8208C47.4944 21.0809 47.5142 23.1307 46.3094 25.1924C45.1046 27.2541 39.4809 36.7386 40.3805 45.3402C41.28 53.9417 44.9657 55.1361 44.9657 55.1361C44.9657 55.1361 46.6064 55.9403 49.872 55.9087C53.1376 55.8772 54.7624 55.0415 54.7624 55.0415C54.7624 55.0415 58.4243 53.7761 59.1576 45.1588C59.8908 36.5415 54.0849 27.1673 52.8405 25.1293Z',
          ],
        }}
        transition={{
          repeat: Infinity,
          // ease: 'easeInOut',
          duration: 2,
        }}
      ></motion.path>
      <path
        d="M31.5789 39H13.4211C13.4211 39 11 39 11 42.5172C11 46.0345 12.8158 50.7241 17.0526 52.4828V54.2414C17.0621 54.711 17.2615 55.1583 17.6078 55.4871C17.9541 55.816 18.4198 56.0001 18.9048 56H26.0952C26.5802 56.0001 27.0459 55.816 27.3922 55.4871C27.7385 55.1583 27.9379 54.711 27.9474 54.2414V52.4828C32.1842 50.7241 34 46.0345 34 42.5172C34 39 31.5789 39 31.5789 39Z"
        fill="#3D4349"
      />
    </svg>
  )
}

export default Spinner
