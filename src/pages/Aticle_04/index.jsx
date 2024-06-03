import 'bootstrap/dist/css/bootstrap.min.css';
import img_01 from '../../assets/images/aticle_04_img_01.webp'
import img_02 from '../../assets/images/aticle_04_img_02.webp'
import img_03 from '../../assets/images/aticle_04_img_03.webp'
import './index.css';
export default function Aticle_04 (){
  return(
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
       <p>Washing machines fail due to many different reasons, including both objective and subjective reasons. Join Betashop to learn about the most common washing machine errors and how to fix them to help make your family's life simpler!</p>
       <img src={img_01}></img>
       <strong>1. The washing machine vibrates strongly and makes loud noises</strong>
       <p>When the washing machine vibrates strongly, the cause may be due to the way the washing machine is positioned misaligned and unbalanced at the four corners. To solve this vibration situation, the simplest way you just need to do is to adjust the position of the washing machine so that the machine looks solid, sturdy and creates a feeling of safety.</p>
       <p>In the case of a washing machine making loud noises, the two main causes of this phenomenon are: the clothes in the drum are twisted, disrupting the washing line, or there is a foreign object in the washing machine that you have not had time to remove from inside. pants or shirt pocket. To fix it, you just need to turn off the machine, check your clothes again and pay attention to loosening them.</p>
       <strong>2. Does the washing machine drain water continuously without stopping?</strong>
       <p>The reason is because the washing machine's drain valve is stuck because foreign objects follow the clothes into the washing machine. In the case of a low-level leak, wash the machine normally. After a while, the foreign object will automatically follow the water and quickly flow out, and the washing machine will return to its normal state. At more severe levels, please ask a service center expert to promptly repair it.</p>
       <img src={img_02}></img>
       <strong>3. Even though it is in overflow mode, water does not flow out of the drain pipe</strong>
       <p>Usually in this case the washer did not follow the instructions written in the instruction sheet. The main cause of this phenomenon is: the user has set the water level and pressure lower than normal, the move you need to do is just adjust the water level and pressure so that the water supply ratio is correct. Meets the standard of 15 liters/minute.</p>
       <strong>4. Even though the washing process has finished, the machine does not automatically turn off the power</strong>
       <p>When the washing process is finished, you discover that the washing machine cannot automatically turn off the power as usual. The cause may be because the washing machine's power switch is stuck. This is a high level leak, so you need to contact a warranty center for repair.</p>
       <img src={img_03}></img>
       <strong>5. Water does not flow into the barrel when washing and spinning</strong>
       <p>This is a phenomenon that often occurs during the washing process, try checking to see if you are missing any stages before starting to wash? First check the water supply, then whether the water supply faucet is open or not, and finally check the metal mesh - the part that circulates the water in and out, is it clogged?</p>
       <strong>6. Washing water discharge time is too long</strong>
       <p>You need to immediately check whether the drain hose is connected properly or not. If not, a clogged drain hose may be the cause of prolonged drain time. Another possible cause of this situation is that your drain pipes are deformed or distorted due to external factors. Turn off the machine and check them carefully.</p>
       <strong>7. The washing machine does not perform the spin function</strong>
       <p>Most commonly there will be 3 causes of this phenomenon, please check and check carefully before you call the service center person. First: carefully check whether the washing machine lid is closed, second: maybe the laundry is stuck on one side of the spin drum, just adjust it so that the laundry is balanced. Third: check the drain hose to see if it is clogged or not.'</p>
       <strong>8. The washing machine is not working even when plugged in</strong>
       <p>When encountering this situation, users will usually think that the washing machine is damaged, but the situation is not yet that serious. You should prioritize checking the following important parts: POWER SWITCH and START/PAUSE start button to see if you have pressed it, are the power cord and power source really okay?</p>
       <strong>9. The washing machine does not clean clothes</strong>
       <p>In the washing machine drum, the amount of water and the amount of clothes are not balanced. This is a common cause when washing clothes is not as clean as expected. Second, because the cleaning of the machine box and washing drum is not very thorough, it affects the clothes. Just make adjustments and pay more attention and you will improve washing</p>
       <strong>10. Clothes still have tiny particles of detergent</strong>
       <p>After the washing machine completes the washing, rinsing, and spinning processes, you discover that the clothes still have tiny particles of detergent. Wondering what causes this condition? Maybe you used too much washing powder, so the excess remains on the clothes. The next cause may come from the water temperature being too low, the temperature must be lower than 40 degrees Celsius for the water to dissolve. running out of detergent.</p>
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