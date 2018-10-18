<?php
//set title and description for page
$title        = 'home';
$description  = 'description for page';
$pageLoader   = false;
include $_SERVER['DOCUMENT_ROOT'].'/assets/build/scaffold/head.php';
?>

<!-- START -->
<div class="page-wrap grid-y">
  
  <div class="cell small-12">
    <h1>tally.enter</h1>
    <input class="tally-input" type="number" pattern="[0-9]*" name="tally" placeholder="0" novalidate/>
    <ul class="tally-nav button-group">
      <li><button class="button tally-last"><i class="fa fa-reply"></i></button></li>
      <li><button class="button tally-add"><i class="fa fa-plus"></i></button></li>
    </ul>
  </div>
  
  <div class="cell small-12">
    <h1>tally.list</h1>
    <button class="button tally-clear-list"><i class="fa fa-remove"></i><i class="fa fa-list"></i></button>
    <ul class="tally-list">
      <!-- js to put list here -->
    </ul>
  </div>
</div>
<!-- END -->

<?php include $_SERVER['DOCUMENT_ROOT'].'/assets/build/scaffold/foot.php'; ?>