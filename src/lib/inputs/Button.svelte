<script lang="ts">
    // =========================================================
    //  import all necessary 
    // =========================================================
    import { onMount, createEventDispatcher  } from 'svelte';
    import { pickTextColorBasedBgColor } from "$lib/functions/Colors";

    // =========================================================
    //  Const / Variables
    // =========================================================
    const dispatch = createEventDispatcher();
    const ColorSchema = {
        primary: {className: "bg-cloud-primary", classShadow: "shadow-[0_4px_9px_-4px_rgba(var(--color-primary))]", classVariable: "--color-primary"},
        success: {className: "bg-cloud-success", classShadow: "shadow-[0_4px_9px_-4px_rgba(var(--color-success))]", classVariable: "--color-success"},
        danger: {className: "bg-cloud-danger", classShadow: "shadow-[0_4px_9px_-4px_rgba(var(--color-danger))]", classVariable: "--color-danger"},
        warning: {className: "bg-cloud-warning", classShadow: "shadow-[0_4px_9px_-4px_rgba(var(--color-warning))]", classVariable: "--color-warning"},
        info: {className: "bg-cloud-info", classShadow: "shadow-[0_4px_9px_-4px_rgba(var(--color-info))]", classVariable: "--color-info"},
    }
 
    // =========================================================
    //  Props
    // =========================================================
    export let colorShema: keyof typeof ColorSchema = "primary";
    export let flat:boolean = false;
    export let eventOptions:object = {};

    // =========================================================
    //  Coose the Font-Color based on Backgroud
    // =========================================================
    let textColor = "";
    onMount(() => {
        textColor = pickTextColorBasedBgColor(ColorSchema[colorShema].classVariable);
    });

    // =========================================================
    //  Triggering Event
    // =========================================================
    function handleClick() {
		dispatch('clicked', eventOptions);
	}
</script>

<button
    type="button"
    on:click={() => handleClick()}
    class=" inline-block 
            rounded 
            {textColor}
            {ColorSchema[colorShema].className}
            {!flat ? ColorSchema[colorShema].classShadow: ""}
            px-6 pt-2.5 pb-2 
            text-xs 
            font-medium 
            uppercase 
            leading-normal
            transition duration-150 ease-in-out 
            hover:brightness-125  
            focus:outline-none 
            focus:ring-0 
            focus:brightness-90
            active:brightness-90
            ">
    <slot/>
</button>