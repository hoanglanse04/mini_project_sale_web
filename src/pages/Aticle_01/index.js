import 'bootstrap/dist/css/bootstrap.min.css';
import img_01 from '../../assets/images/aticle_01_img_01.webp'
import img_02 from '../../assets/images/aticle_01_img_02.webp'
import img_03 from '../../assets/images/aticle_01_img_03.webp'
import './index.css';


export default function Aticle_01() {
  return(
    <>
    <div className="article">
      <div className="container">
      <h4>WHY ARE ELECTROLUX WASHING MACHINES MORE EXPENSIVE?</h4>
        <span>09:54 10/12/2015</span>
        <p>posted by: Tran Tung</p>
      </div>
    </div>
    <div className='aticle__title'>
      <div className='container d-flex justify-content-center flex-column '>
        <img src={img_01}></img>
        <p>Electrolux washing machines are famous as high-end washing machines, the quality is known and desired by many users, but Electrolux washing machines are always more expensive than other washing machines, why is that?.</p>
        <strong>1. Prestigious, quality brand</strong>
        <p>Electrolux is famous as the second largest household appliance manufacturing brand in the world, founded in 1919 and headquartered in Sweden. Electrolux is a high-end brand, with many innovative products with unique designs, about 40 million products are sold annually in over 150 countries.</p>
        <p>With a team of highly technical experts, Electrolux constantly researches and improves products to meet consumer needs. Therefore, Electrolux washing machines not only stand out for their luxurious design but also for their quality with many modern technologies equipped to help improve outstanding cleaning quality, operate well and save many other costs.</p>
        <strong>2. Luxurious design, beautiful and highly usable</strong>
        <p>Electrolux washing machines possess many luxurious, unique and novel designs that attract beautiful appearance. Electrolux washing machines currently have 2 types: top-loading washing machines and front-loading washing machines. For top-loading Electrolux washing machines, the design is beautiful, the washing volume is from 7.0 kg to 11.0 kg, the EWT line uses T-Drive technology to clean, prevent clothes from twisting, does not stick to detergent after washing, saving money. water and user-friendly.</p>      
        <p>Front-loading Electrolux washing machine with luxurious appearance, elegant and diverse colors, washing volume has many types to choose from from 7.0kg to 11.0kg, applying many advanced washing technologies. In particular, front-loading Electrolux washing machines are leading in the Vietnamese market today.</p>
        <img src = {img_02}></img>
        <strong>3. High durability</strong>
        <p>Electrolux washing machines are considered a reliable brand in terms of product durability. Because the manufacturer Electrolux has constantly improved product quality so that the design and materials are suitable for environmental conditions or consumer habits and needs. Thanks to that, Electrolux washing machine product lines are very durable and can withstand hot climates in Asian countries.</p>
        <strong>4. Cleans effectively</strong>
        <p>With modern washing technologies equipped on Electrolux washing machines such as Jetspray washing technology that sprays water directly onto clothes to create concentrated foam to remove all stains, Vapor steam cleaning technology helps clean effectively or technology Load Sensor can balance the amount of laundry to be washed before giving the required washing time and amount of detergent.</p>
        <p>Along with that, there are many specialized washing modes such as quick wash program, synthetic wash, cotton wash, hot wash, cold wash, etc. so you will choose the appropriate washing program to help clean quickly and protect your clothes. Protects clothes from damage, reduces wrinkles and effectively maintains the durability of the fabric.</p>
        <img src={img_03} ></img>
        <strong>5. Save electricity and water</strong>
        <p>For EWT top-loading Electrolux washing machines equipped with T-Drive technology, it can save up to 50% of water usage compared to conventional washing machines. Almost all front-loading Electrolux washing machines have the ability to save electricity. and water. In addition, the Time Manager washing time management technology on front-loading Electrolux washing machines allows you to set the timer depending on the number of clothes to be washed, saving time as well as power consumption and water usage. Besides, the Inverter technology equipped on the Electrolux washing machine helps the machine operate durably, smoothly and effectively saves energy consumption.</p>
        <strong>6. Smooth operation</strong>
        <p>Electrolux washing machines have the advantage of operating smoothly and rhythmically, without making too much noise that annoys the user. If the Electrolux washing machine makes loud noises, vibrates or shakes while washing, it is due to an error during the installation process that is not balanced, or too little laundry. Therefore, when installing a washing machine at home, you must check the machine. Is it balanced? If not, ask the technician to adjust it for balance.</p>
        <div className='share d-flex flex-row' >
          Share:
          <li><i class="bi bi-facebook"></i></li>
          <li><i class="bi bi-twitter"></i></li>
          <li><i class="bi bi-pinterest"></i></li>
          <li><i class="bi bi-google"></i></li>
        </div>
      </div>
    </div>
    </>
  )
}