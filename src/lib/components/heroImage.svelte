
<script>

const authors = ["Patrick Griffin", 'Branden DuPont',"Don Stemen","Dave Olson","Amanda Ward", ]

const credit ="Photo by: Andrew Adams"
const image_var ="https://images.unsplash.com/photo-1491832136260-6db1d35247e9?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

import logo from '$lib/assets/images/capitol.jpg';
//import logo from '$lib/assets/images/pfa-report-image-2.png';
</script>
<div class="max-w-4xl  lg:max-w-full sm:pb-[100px]" >
  

    <section class="overflow-hidden bg-black sm:grid sm:grid-cols-2 ">
      <div class="relative sm:hidden">
      <img
      alt="Image of the Illinois State Capitol by Andrew Adams"
      src={logo }
      aria-label="Image of the Illinois State Capitol by Andrew Adams"
      class="sm:h-[500px] w-full h-[200px] sm:hidden  sm:h-[620px]"
    />
    <div class="absolute bottom--6 right-2  ">
    <div class="text-white text-[8px] floating-right sm:block"><a class="hover:underline hover:text-main" href="https://unsplash.com/@drewjayadams">{credit}</a></div>
  </div>
</div>
      <div class="p-8 md:p-12   grid place-items-center">
        
        <div class="sm:mt-10">
        <div class="mx-auto max-w-xl grid sm:text-left">
          <h2 class="font-mono  text-white  md:text-5xl text-4xl font-sans mb-6 ">
            The First Year of the Pretrial Fairness Act
          </h2>
          <p class="text-gray-300 sm:text-base  text-sm">
 Beginning September 18, 2023, the Pretrial Fairness Act fundamentally altered pretrial practices in Illinois. What can we say about the workings and effects of the new law at the one-year point? 
          </p>
          
          <span class="  font-semibold text-white mt-4"> </span> 
          <ul class="flex flex-row  flex-wrap text-white ">
            <li class="font-semibold text-white pr-1 sm:text-base  text-xs ">By:</li> 
            {#each authors as author , i}
               <li class="flex flex-wrap max-w-sm" >

                 <dl class=" font-semibold sm:text-base  text-xs">
                   <dt class="sr-only">Name</dt>
                   <dd class="text-white text-mono"> {author} · &nbsp;  </dd>

                   <dd>

                   </dd>
            
                 </dl>
               </li>
               {/each}
           </ul>
    
    
                    <div class='mt-2'>
                      <dd class=" sm:text-sm  text-xs  text-white ">
                        <time >
                          Report Published: 9-19-2024
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
        class=" w-full   sm:h-[620px]"
      />
      <div class="absolute bottom-2 right-2  ">
      <div class="text-white text-xs floating-right"><a class="hover:underline hover:text-main" href="https://unsplash.com/@drewjayadams">{credit}</a></div>
    </div>
      </div>
      
    </section>
    

    
    </div>