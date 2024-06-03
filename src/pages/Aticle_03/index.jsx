
import 'bootstrap/dist/css/bootstrap.min.css';
import img_01 from '../../assets/images/aticle_03_img_01.webp'
import img_02 from '../../assets/images/aticle_03_img_02.webp'
import './index.css';
export default function Aticle_03 (){
  
  return (
    <>
    <div className="article">
      <div className="container">
      <h4>Notes when using induction cooker</h4>
        <span>09:54 10/12/2015</span>
        <p>posted by: Tran Tung</p>
      </div>
    </div>
    <div className='aticle__title'>
      <div className='container d-flex justify-content-center flex-column '>
        <img src={img_01} ></img>
        <p>Sometimes you buy a new electronic device without knowing all the necessary information to use it most effectively, or simply to ensure safety. Below are some notes from Betashop when using induction cookers.</p>
        <img src={img_02} ></img>
        <p>1. Before use, check the rated voltage of the stove. Some foreign induction cookers are designed to operate with a voltage of 100V, so if you want to be able to use it at a voltage of 220V, you must be equipped with a step-down transformer with a large enough capacity. The power source is unstable and sometimes not, or frequent overvoltages, voltage drops, etc. can easily cause fires and damage to electrical equipment, including induction cookers. Be careful when using it.</p>
        <p>2. The stove's capacity is relatively large, so carefully check the electrical system in the house before using. You need to calculate the total electricity consumption in the family (including the induction cooker) to see if the power lines and meters can handle it or not. Families who buy electric stoves must use an electricity meter above 5A. Socket plugs must also be above 5A and must not be used on top of each other for shared use. Electrical wires must have a cross section of 0.75 mm2 to ensure safety and must have a ground wire.</p>
        <p>3. The stove must be kept away from heat and steam, not near walls or other objects. The back of the stove must be at least 15cm away from the wall and at least 5cm away from other objects. Induction cookers should not be placed near hot places or places with steam. The environment in which the stove is used ranges from 10 degrees Celsius to 40 degrees Celsius.</p>
        <img src={img_01} ></img>
        <p>4. Induction cookers use electromagnetic induction to provide heat, so there is no heat after being plugged in on the stovetop. Only when an iron pot or enameled iron pot is placed on the stove will the pot heat up. Induction cookers cannot use glass, aluminum, copper, or clay pots because they are non-ferromagnetic materials that cannot increase the temperature.</p>
        <p>5. When using an induction cooker, place the pot within the specified range, then turn on the power switch and adjust the temperature to the necessary level. While frying or roasting food, do not leave the stove, because if you leave the stove too hot, it will be dangerous. Avoid cooking pots without food or dry roasting, which can cause fires or cracks on the stove top.</p>
        <p>6. After using the stove, adjust the temperature to the lowest level, then turn off the power switch, and take the pot down. Wait until the stove cools down, use a wet cloth dipped in a little neutral detergent to clean the stove top. Do not use strong chemicals, kerosene, wire brushes, direct flushing with water, etc. to wash the stove. When using, you must also be careful not to let the rice and soup spill onto the kitchen surface. If not used for a long time, clean and pack for preservation.</p>
        <p>7. It is best not to keep audio recorders, video recorders, television sets (televisions) and other household appliances within 3 meters of the kitchen because they are easily magnetized and cause damage. People wearing pacemakers must get permission from a doctor and take precautions before using them.</p>
        <p>8. Induction cookers have many electrical and electromagnetic systems, so when problems arise, take them to specialized repair shops and do not disassemble the components yourself for repair. If you do not have knowledge about electronics, you should not disassemble and repair the induction cooker.</p>
        <p>9. Bếp điện từ chỉ dùng cho nồi sắt nhưng vẫn có thể sử dụng cho nồi đất, nồi sứ có đáy phẳng bằng cách tìm một một miếng sắt phẳng, sạch, có cảm ứng từ đặt giữa bếp từ và nồi.</p>
        
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
  );
}