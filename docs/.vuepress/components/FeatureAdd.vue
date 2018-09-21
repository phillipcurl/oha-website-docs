<template>
  <div>
    <h3 id="add-feature">Add Feature</h3>
    <p>
      To add a feature, first make sure the page you're editing has a subfolder named "Feature". 
      If not, right click on the current page in the content directory, and select "New" > "Folder". 
      To add the new feature, right click on the "Feature" folder, and select "New" > "OHA Feature",
      as shown below.
    </p>
    <img :src="$withBase('/screenshots/add-feature.png')" alt="Add a feature" style="max-width: 500px;">
    <p>
      Now that your new feature has been created, follow the steps in the <a href="#edit-feature">"Edit Feature"</a> section below
      for more information on configuring and editing the various feature fields.
    </p>
  </div>
</template>
