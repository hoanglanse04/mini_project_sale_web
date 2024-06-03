import 'bootstrap/dist/css/bootstrap.min.css';
import img_01 from '../../assets/images/aticle_05_img_01.webp'
import img_02 from '../../assets/images/aticle_05_img_02.webp'
import img_03 from '../../assets/images/aticle_05_img_03.webp'
export default function Aticle_05 (){
  return(
    <>
    <div className="article">
      <div className="container">
      <h4>Tips for cleaning kitchen items</h4>
        <span>09:54 10/12/2015</span>
        <p>posted by: Tran Tung</p>
      </div>
    </div>
    <div className='aticle__title'>
      <div className='container d-flex justify-content-center flex-column '>
       <p>Microwaves, ovens, kitchen utensils, sinks... are very familiar objects to housewives. If you know how to clean properly, the items will stay with you longer.</p>
       <img src={img_01} alt="" />
       <strong>1. Clean the oven:</strong>
       <p>Groove: Soak the groove in a solution of hot water and all-purpose cleaner containing ammonia or in a solution of 1/2 cup ammonia to 1 quart hot water. Use a soapy cleaning pad to remove stubborn stains.</p>
       <p>Grill pan: Clean grill pan after each use. Disassemble the grill and discard any excess grease. Fill a baking pan with hot water and dish soap. Replace the grill. Keep the baking pan in this solution for about 30 minutes. Then rinse with hot soapy water, rinse and dry.</p>
       <p>Fans and extractors: Disassemble the wire mesh filters and clean them in the dishwasher or soak in the sink in a solution of hot water and all-purpose household cleaner. Rinse and dry completely. Before replacing the filter, wipe the impeller with a clean, damp cloth.</p>
       <p>How to clean cooking utensils: Use cleaning agent (powder, corrosive). Wet the surface and gently scrub with detergent as needed and rinse.</p>
       <img src={img_02} alt="" />
       <strong>2. Kitchen countertop:</strong>
       <p>Use a multi-purpose cleaner (powder, liquid, non-abrasive). Mix with water or use a pure cleaning solution according to the instructions for use. Rinsing is generally not required unless the device surface is unpolished or when water is not mixed.</p>
       <strong>3. Cleaning the microwave:</strong>
       <p>f there is a turntable, remove it and wash it in warm soapy water, or in the dishwasher, then let it dry. To clean the inside of the microwave, boil a cup of water for 3-4 minutes. Condensation will loosen food particles on the walls or ceiling of the microwave. Then wipe with a damp sponge or cloth and dry. Do not use commercially available oven cleaners or disassemble the microwave for cleaning. To deodorize, wash the inside of the oven every few months with a solution of 1/4 cup baking powder and 1 quart warm water, rinse and dry.</p>
       <img src={img_03} alt="" />

       <strong>4. Clean cutting boards:</strong>
       <p>Use chlorine bleach. Mix 3/4 cup bleach with 1 gallon (about 3.7 liters) of water, increasing the strength as needed. Rinse thoroughly with clean water</p>
       <strong>5. Cleaning household items made from plastic:</strong>
       <p>Use a multi-purpose cleaner (powder, liquid, non-abrasive). Mix with water or use pure cleaning solution according to the instructions for use. Rinsing is usually not required unless the surface is unpolished or when water is not mixed.</p>
       <strong>6. Remove stains on plastic tools</strong>
       <p>Use baking soda. Use as paste: Mix 3 parts baking powder with 1 part water. Liquid form: Mix 4 tablespoons of baking powder per 1 liter of water. Dry form: Sprinkle directly. Rub the embossing powder with a damp sponge or cloth, rinse and dry.</p>
       <p>Use detergent (powder form, corrosive). Wet the surface and apply detergent, scrub gently as necessary and rinse. As for stains on sinks and bathtubs.You can use abrasive cleaners (liquid). Apply to surface, rub gently and rinse.</p>



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