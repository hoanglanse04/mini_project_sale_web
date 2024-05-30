
import 'bootstrap/dist/css/bootstrap.min.css';
import img_01 from '../../assets/images/aticle_02_img_01.webp'
import img_02 from '../../assets/images/aticle_02_img_02.webp'
import './index.css';

export default function Aticle_02 (){
  return(
    <>
    <div className="article">
      <div className="container">
      <h4>Tips to increase the lifespan of your refrigerator</h4>
        <span>09:54 10/12/2015</span>
        <p>posted by: Tran Tung</p>
      </div>
    </div>
    <div className='aticle__title'>
      <div className='container d-flex justify-content-center flex-column '>
        <p>Refrigerators are an essential appliance in every modern family. Some notes on how to use from when you first bought it to how to use it properly every day will help increase the life of your family's refrigerator, save energy and effectively use important and useful items. this benefit.</p>
        <img src={img_01}></img>
        <strong>1. When I first bought the refrigerator</strong>
        <p>When you first buy a refrigerator, your refrigerator must be transported a long distance, easily causing an electric shock if you plug it in and use it immediately. Therefore, you need to keep in mind the following points when you first buy a refrigerator:</p>
        <p>- Find a suitable location to place the refrigerator, limit moving the refrigerator many times.</p>        
        <p>- The surface where the refrigerator is placed must be solid and flat so that the refrigerator is stable during use</p>
        <p>- Place the refrigerator stably, unplugged for at least 2 hours.</p>
        <p>- After 2 hours, plug in the power and set the lowest gear to let the refrigerator run without load for 24 hours. That is, you will not put food or anything in the cabinet. This is to ensure that the refrigerator will gradually get used to the working mode and will not suddenly overload to cool a large amount of food, causing damage to the refrigerator. At the same time, it also helps prevent your food from smelling like plastic and the amount of bad air released from the new cabinet.</p>
        <p>- After every 4 hours, open the refrigerator door to let the cold air escape, bringing with it the plastic smell of the new refrigerator, bringing fresh, clean air to the refrigerator.</p>
        <p>- After 24 hours of idling, use a damp cloth to clean the entire inside surface of the cabinet.</p>
        <p>- Start putting food in the refrigerator and use it normally.</p>
        
        <strong>2. During use</strong>
        <p>While using the refrigerator, you should clean the refrigerator properly every week to remove stains and potential bacteria inside and outside the refrigerator. When cleaning the refrigerator, you need:</p>
        <p>- Turn off the power source and take all food out.</p>
        <p>- Use a soft cloth to gently wipe the inside surface of the refrigerator. Avoid using any sharp objects to scrape, pry off snow and stains in the refrigerator to avoid damaging the evaporator in the refrigerator.</p>
        <p>- Clean the outside of the refrigerator and the area around the refrigerator to avoid rats and mice damaging the machine parts and electrical wires of the refrigerator.</p>
        <p>Use a separate power source for the refrigerator</p>
        <img src={img_02}></img>
        <p>The power source is an important part when using a cabinet to help the cabinet operate effectively and avoid damage due to unstable electricity. Using the power source properly also helps protect your home's electrical system, avoiding fires and explosions due to short circuits.</p>
        <p>- Refrigerators consume a certain amount of electricity and work continuously at high intensity.</p>
        <p>Therefore, the power outlet for the refrigerator should be designed independently, not shared with other devices.</p>
        <p>- The power source used for the refrigerator should have a separate fuse to prevent electrical overload causing fire, explosion, and damage to the electrical system in the house.</p>
        <p>In addition to using new technology refrigerators with energy-saving functions, some good habits in daily refrigerator use also help you save significant electricity.</p>
        <p>- Do not put hot food in the refrigerator to avoid the situation where the refrigerator must consume a significant amount of electricity to balance the necessary cold temperature in the refrigerator.</p>
        <p>- Do not put too much food in the refrigerator to help prevent the refrigerator from being overloaded.</p>
        <p>There needs to be clear space between foods placed in the refrigerator so that cold air can pass through, cooling everything evenly, leading to less energy consumption.</p>
        <p>- Do not open the cabinet too much or for too long.</p>
        <p>- Use metal food containers instead of plastic. Because metal utensils have good heat conductivity, food is cooled faster, helping the refrigerator consume less electricity.</p>
        
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