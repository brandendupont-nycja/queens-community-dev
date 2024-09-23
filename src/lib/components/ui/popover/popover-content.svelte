<script lang="ts">
	import { Popover as PopoverPrimitive } from "bits-ui";
	import { cn, flyAndScale } from "$lib/utils.js";

	type $$Props = PopoverPrimitive.ContentProps;
	let className: $$Props["class"] = undefined;
	export let transition: $$Props["transition"] = flyAndScale;
	export let transitionConfig: $$Props["transitionConfig"] = undefined;
	export { className as class };
</script>

<PopoverPrimitive.Content
	{transition}
	{transitionConfig}
	class={cn(
		"bg-popover text-popover-foreground z-50  rounded-md border p-4 bg-gray-50 shadow-xs hover:shadow-lg border-r-[7px] border-b-[7px] border-black border-2 rounded-lg transition duration-300 ease-in-out sm:-translate-y-1 sm:translate-x-10 w-5/6 sm:max-w-[450px]",
		className
	)}
	{...$$restProps}
>
<div class="m-2 text-sm">
<slot/>
</div>
</PopoverPrimitive.Content>
