<template>
  <div
    class="d-flex flex-column justify-content-center align-items-center py-4"
  >
    <div class="container">
      <div class="w-75 mx-auto">
      <!-- next section -->
      <div class="text-center fs-2 my-2 fw-bold pb-4">Stay updated</div>
      <form class="w-full">
        <div class="d-flex justify-content-between flex-row">
          <div>

            <input
              placeholder="Enter your email"
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />

            <div id="emailHelp" class="form-text">
              We'll never share your email with anyone else.
            </div>

          </div>

          <button type="submit" class="btn btn-warning">Submit</button>

        </div>
      </form>  
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "form-section",
};
</script>
