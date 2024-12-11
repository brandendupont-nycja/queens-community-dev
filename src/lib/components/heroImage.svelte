
<script>

const authors = ["Patrick Griffin", 'Branden DuPont',"Don Stemen","Dave Olson","Amanda Ward", ]

const credit ="Photo by: Josiah Gibbs"
const logo ="https://images.unsplash.com/photo-1649956726800-af1971584a5a?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

//import logo from '$lib/assets/images/capitol.jpg';
//import logo from '$lib/assets/images/pfa-report-image-2.png';
</script>
<div class="max-w-4xl  lg:max-w-full sm:pb-[100px]" >
  

    <section class="overflow-hidden bg-black lg:grid lg:grid-cols-2 ">
      <div class="relative sm:hidden">
      <img
      alt="Image of Queens"
      src={logo }
      aria-label="Image of Queens"
      class=" w-full h-[200px] sm:hidden "
    />
    <div class="absolute bottom--6 right-2  ">
    <div class="text-white text-[8px] floating-right sm:block"><a class="hover:underline hover:text-main" href="https://unsplash.com/@drewjayadams">{credit}</a></div>
  </div>
</div>
      <div class="p-8 md:p-12   grid place-items-center">
        
        <div class="sm:mt-10">
        <div class="mx-auto max-w-xl grid sm:text-left">
          <h2 class="font-mono  text-white  2xl:text-5xl lg:text-4xl  text-4xl font-sans mb-6 ">
            Across Queens, the DA Centers The Community in Public Safety
          </h2>
          <p class="text-gray-300 xl:text-base  text-sm">
            The Queens District Attorney’s Office seeks to re-imagine the relationship between the prosecutors’ office and the residents of Queens County by being an integral part of the community. Through several community-based initiatives - including the Community Partnerships Division, Violence Prevention and Youth Development Grants, and the Youth Empowerment Unit –  the office is working collaboratively with the community to create and realize a sustainable future for Queens.
          </p>
          
          <span class="  font-semibold text-white mt-4"> </span> 
          <ul class="flex flex-row  flex-wrap text-white ">
            <li class="font-semibold text-white pr-1 xl:text-base  text-xs ">By:</li> 

               <li class="flex flex-wrap max-w-sm" >

                 <dl class=" font-semibold xl:text-base  text-xs">
                    The Queen's District Attorney's Office
                   <dd>

                   </dd>
            
                 </dl>
               </li>

           </ul>
    
    
                    <div class='mt-2'>
                      <dd class=" sm:text-sm  text-xs  text-white ">
                        <time >
                          Report Published: 10-30-2024
                        </time>
                      </dd>
                    </div>
    
        </div>
    </div>
      </div>
    
    <div class='relative sm:block hidden'>
      <img
        alt="Image of the Illinois State Capitol by Andrew Adams"
        src={logo }
        aria-label="Image of the Illinois State Capitol by Andrew Adams"
        class=" w-full   md:h-[450px] lg:h-[450px] xl:h-[600px] 2xl:h-[650px]"
      />
      <div class="absolute bottom-2 right-2  ">
      <div class="text-white text-xs floating-right"><a class="hover:underline hover:text-main" href="https://unsplash.com/@drewjayadams">{credit}</a></div>
    </div>
      </div>
      
    </section>
    

    
    </div>