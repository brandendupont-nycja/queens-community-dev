
<script>

const authors = ["Don Stemen","Dave Olson", 'Branden DuPont']

const credit ="Kevin Rajaram"
const image_var ="https://images.unsplash.com/photo-1491832136260-6db1d35247e9?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
</script>
<div class="max-w-4xl  lg:max-w-full pb-[100px]" >
  

    <section class="overflow-hidden bg-black sm:grid sm:grid-cols-2 ">
      <div class="p-8 md:p-12   grid place-items-center">
        
        <div class="mt-10">
        <div class="mx-auto max-w-xl grid sm:text-left">
          <h2 class="text-5xl text-white  md:text-6xl font-sans  mb-6 ">
         In Illinois,<br> Counties Disagree on Detaining Detainable Offenses
          </h2>
          <p class="text-gray-300">
            Across Illinois Counties the rate at which detainable offenses get detained varies widely.
          </p>
          <ul class="flex flex-row sm:space-x-1 space-x-1 mt-4  ">

            <span class="  font-semibold text-white ">By </span> 
            {#each authors as author , i}
               <li class=" " >

                 <dl class=" font-semibold ">
                   <dt class="sr-only">Name</dt>
                   <dd class="text-white text-mono">{author} · </dd>

                   <dd>

                   </dd>
            
                 </dl>
               </li>
               {/each}
           </ul>
    
    
                    <div class='mt-2'>
                      <dd class=" sm:text-md text-sm text-white ">
                        <time >
                          Data Story Published: 6-9-2024
                        </time>
                      </dd>
                    </div>
    
        </div>
    </div>
      </div>
    
    <div class=''>
      <img
        alt="correctional image"
        src={image_var}
        class="h-76 w-full  sm:block hidden sm:h-svh"
      />
      <span class="text-white text-xs absolute bottom-2 right-2">{credit}</span>
      </div>
    </section>
    

    
    </div>