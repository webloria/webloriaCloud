<script lang="ts">
  import CardContainer from "$lib/containers/CardContainer.svelte";
  import InputField from "$lib/inputs/InputField.svelte";
  import Button from "$lib/inputs/Button.svelte";
  import Anchor from "$lib/inputs/Anchor.svelte";
</script>

<div class="h-96 flex justify-center items-center">

  <CardContainer>
    <div class="text-center mb-4">
      <h1 class="text-3xl"><i class="fa-solid fa-cloud"></i> Webloria</h1>
      <p>This is your new cloud!</p>
    </div>
    <form action="">
      <InputField label="Username" name="username" placeholder="Username" type="text" value="" error=""></InputField>
      <InputField label="Password" name="password" placeholder="Password" type="password" value=""></InputField>
      <div class="mt-8 flex justify-between items-center">
        <Button colorShema="primary" flat={false} on:clicked={() => {console.log("hallo")}}>Submit</Button>
        <Anchor href="">Forgot Password?</Anchor>
      </div>
    </form>
  </CardContainer>

</div>