<template>
    <div>
      MessageBoard
      <form @submit.prevent="onSubmit">
        <p>
          <textarea name="name" rows="8" cols="80"></textarea>
        </p>
        <button type="submit">OK</button>
      </form>
    </div>
</template>

<script>
export default {
}
</script>

<style>

</style>
