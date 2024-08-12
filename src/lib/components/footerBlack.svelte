

<script>
        import whitelogo from "./ccj-loyola-white.svelte"
    
    const headerNavLinks = [
      { href: 'https://loyolaccj.org/blog', title: 'Publications' },
      { href: 'https://loyolaccj.org/people', title: 'People' },
      { href: 'https://loyolaccj.org/work-with-us', title: 'Work With Us' },
      { href: 'https://loyolaccj.org/news', title: 'News' },
      { href: 'https://loyolaccj.org/about', title: 'About' },
    ]
    
    </script>
    
    <footer class="bg-black mt-[100px]">
      <div class="max-w-screen-xl px-4 py-10 mx-auto sm:px-6 lg:px-8">
        <div class="sm:mt-8 bg-accentRed"></div>
      <div class="grid sm:grid-cols-2  justify-center gap-0 justify-items-center sm:mt-10 mb-10 sm:space-x-20">
        
        
      <div class="flex  sm:items-end mb-5 ">
    
    <div class=" sm:space-x-4 ">
    
      {#each headerNavLinks as link}
        <span                   id={link.title} class=' border-white hover: hover:border-b-2 hover:border-b-lblue-500 sm:text-lg text-lg font-mono text-bold '>
    
        <a
          href={link.href}
          class="p-1  font-bold"
        >
          {link.title}
        </a>
    
        </span>
     {/each}
    </div>
    
    </div>
      
    
      </div>
      <div class="pt-8 mt-12 border-t border-white ">
        </div>
      <div>
    </div>
    
      <div class="sm:grid sm:grid-cols-2 flex flex-col grid-cols-1 grid-flow-col gap-4 justify-items-center">
      <div class="">
    
        <div class="text-3xl font-bold  font-mono-bold">Team</div>
        <div class="text-darkBase font-space text-md  sm:justify-end mt-6" >
    
    <ul class="space-y-2  font-mono">
    <li>
    <a href="https://loyolaccj.org/people" class="hover:border-b-2 hover:border-white cursor-pointer ">David Olson</a>
    </li>
    
    <li>
      <a href="https://loyolaccj.org/people" class="hover:border-b-2 hover:border-white cursor-pointer ">Don Stemen</a>
    </li>
    <li>
      <a href="https://loyolaccj.org/people" class="hover:border-b-2 hover:border-white cursor-pointer ">Amanda Ward </a> 
    </li>
    <li>
      <a href="https://loyolaccj.org/people" class="hover:border-b-2 hover:border-white cursor-pointer "> Patrick Griffin</a>
    </li>
    <li>
    
    <a href="https://loyolaccj.org/people" class="hover:border-b-2 hover:border-white cursor-pointer ">Branden DuPont</a>
    </li>
    </ul>
    </div>
      
    <div class="">
    
    
    </div>
    
    
      </div>
      
    
      <div class="">
    
    <div class="text-3xl font-bold  ">Projects</div>
    <div class=" font-space text-md  sm:justify-end mt-6" >

    </div>
    </div>
    
    
      
    </div>
    
    
    
      </div>
    </footer>
    
    