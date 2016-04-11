<div id="appendix" class="ads">
    @if(!Config::get('ads', true))	
		<?php echo Theme::widget()->get('blank-ads'); ?>
	@endif
</div>