<script lang="ts">
	export let name="";
	export let label="";
	export let type="text";
	export let value="";
	export let placeholder="";
	export let error="";

	function handleInput(e:any) {
		value = e.target.value;
	}
</script>

<div class="mb-4">
	<label class="block mb-1 text-sm" for="username">{label}</label>
	<input class="block 
				  only:appearance-none 
				  shadow border 
				  border-cloud-input-bg
				  rounded w-full 
				  leading-tight
				  py-2 px-2 
				  bg-cloud-input-bg
				  text-cloud-input-text
				  placeholder-cloud-input-placholder
				  focus:outline-none focus:shadow-outline" 
				  {name} {type} {placeholder} {value}
				  on:input={handleInput}
				  />
	 <div class="text-cloud-danger {(error.length > 0 ? "py-1" : "")}" >{error}</div>
</div>