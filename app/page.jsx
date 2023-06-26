import Image from "next/image"
import styles from './styles/page.module.css'
import bg from './styles/bg2.jpg'
import logo from './styles/logo.png'
import body1 from './styles/body1.jpg'
import body2 from './styles/body2.jpg'
import body3 from './styles/body3.jpg'
import body4 from './styles/body4.jpg'
import footer2 from './styles/footer2.jpg'


function Home() {
  return (
    <>
      
      <div className={styles.header}  >
      <Image
        priority={true}
        loading="eager"
        src={bg}
        className={styles.bg}
        placeholder="blur"
        fill
        sizes="100%"
        alt="picture"
        style={{objectFit: 'cover', objectPosition: 'center '}}
       
        />
        <div className={styles.top}>
        <Image
        priority={true}
        src={logo}
        className={styles.logo}
        alt="picture"

        />
        </div>
        <div className={styles.center}>
           <div className={styles.heading}>
           <h1>FlixiFit</h1>
            <h1>Fashion</h1>
           </div>
           <button>Shop</button>
        </div>

      </div>
      <section className={styles.section_1}>
      <div className={styles.body1}>

      <div className={styles.body1_text}>
        <h1>Unique Selling Proposition</h1>
        <p>Stand Out from the Crowd: Express your individuality with our custom-fit clothing.
- Unmatched Comfort: Experience luxurious fabrics and expert craftsmanship for ultimate comfort.
- Style Made Personal: Choose from a range of colors, patterns, and designs to create your signature look.
</p>
      </div>
      <div className={styles.body1_image} >
        <Image
        src={body1}
        placeholder="blur"
        fill
        sizes="100%"
        alt="picture"
        
        style={{objectFit: 'cover', objectPosition: 'center', borderRadius: '15px'}}
        />
      </div>
      
      </div>
      <div className={styles.body1}>

      <div className={styles.body1_text}>
        <h1>Benefits</h1>
        <p>Tailored to Perfection: Each garment is meticulously crafted to your exact measurements.
- Uncompromising Quality: We source the finest materials to ensure durability and longevity.
- Hassle-Free Returns: We offer a hassle-free return policy if you're not completely satisfied.
</p>
      </div>
      <div className={styles.body1_image} >
        <Image    
        src={body2}
        alt="picture"

        placeholder="blur"
        fill
        sizes="100%"
        
        style={{objectFit: 'cover', objectPosition: 'center', borderRadius: '15px'}}
        />
      </div>
      
      </div>
      <div className={styles.body1}>

      <div className={styles.body1_text}>
        <h1>How It Works</h1>
        <p>Choose Your Style - Browse our collection and select the clothing items you love. Customize Your Fit - Provide your measurements and preferences for a truly personalized fit.
          Expert Tailoring - Our skilled team of tailors will handcraft your garments with precision.Delivered to Your Door - Sit back and relax as your custom-made clothing is delivered to you.
</p>
      </div>
      <div className={styles.body1_image} >
        <Image    
        alt="picture"

        src={body3}
        placeholder="blur"
        fill
        sizes="100%"
        
        style={{objectFit: 'cover', objectPosition: 'center', borderRadius: '15px'}}
        />
      </div>
      
      </div>
      <div className={styles.body1}>

      <div className={styles.body1_text}>
        <h1>Material and Quality</h1>
        <p>we believe that material and quality are at the core of creating exceptional clothing. We meticulously source premium fabrics that not only feel luxurious against the skin but also stand the test of time. Our commitment to quality means that every garment is crafted with precision and attention to detail, ensuring a flawless finish and a garment that will be cherished for years to come.</p>
      </div>
      <div className={styles.body1_image} >
        <Image    
        src={body4}
        alt="picture"

        placeholder="blur"
        fill
        sizes="100%"
        
        style={{objectFit: 'cover', objectPosition: 'center', borderRadius: '15px'}}
        />
      </div>
      
      </div>
      
      </section>
      <section className={styles.footer}>
      <Image
        alt="picture"

        src={footer2}
        className={styles.bg2}
        placeholder="blur"
        fill
        sizes="100%"
        />
        <div className={styles.footer_text}>
        <div className={styles.top2}>
        <Image
        alt="picture"

        priority={true}
        src={logo}
        className={styles.logo}
        />
        </div>

        <div className={styles.footer_text2}>
          <h1>Got a question or </h1>
          <h2>need assistance?</h2>
          <a href="https://api.whatsapp.com/send?phone=+919345480054&text=Hi Magesh">
          <button>Message Me</button>
          </a>
        </div>
          </div>  

        

      </section>
    </>
  )
}

export default Home
