<?php
//set title and description for page
$title        = 'shoppin';
$description  = 'little webapp with tools for shoppin';
$pageLoader   = false;
include $_SERVER['DOCUMENT_ROOT'].'/assets/build/scaffold/head.php';
?>

<!-- START -->
<div class="page-wrap grid-y">
  
  <div class="cell small-12">
    <h1>tally.enter</h1>
    <input class="tally-input" type="number" pattern="[0-9]*" name="tally" placeholder="0" novalidate/>
    <div class="tally-nav button-group expanded large">
      <button class="hollow warning button tally-last"><i class="fa fa-reply"></i></button>
      <button class="hollow success button tally-add"><i class="fa fa-plus"></i></button>
    </div>
  </div>
  
  <div class="cell small-12">
    <h1>tally.list</h1>
    
    <ul class="tally-list">
      <!-- js to put list here -->
    </ul>
    
    <button class="hollow alert button expanded large tally-clear-list"><i class="fa fa-remove"></i><i class="fa fa-list"></i></button>
  </div>
</div>
<!-- END -->

<?php include $_SERVER['DOCUMENT_ROOT'].'/assets/build/scaffold/foot.php'; ?>