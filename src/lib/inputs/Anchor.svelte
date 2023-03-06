<script lang="ts">
    export let href:string = "#";
</script>

<a class="  inline-block 
            align-baseline 
            text-cloud-primary
            hover:brightness-75
            focus:brightness-75
            focus:outline-none " 
            href="{href}">
    <slot/>
</a>