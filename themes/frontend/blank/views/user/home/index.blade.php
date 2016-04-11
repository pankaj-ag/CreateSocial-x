<div class="container page-content clearfix">

        <div class="left-column hidden-xs">
            {{Theme::section('user.side-info')}}
            {{Theme::section('blank.left-menu')}}
        </div>
		
			<div id="right-column" class="right-column">
            {{Theme::extend('timeline-before-post-editor')}}

            {{Theme::section('post.editor.main')}}

            {{Theme::extend('timeline-after-post-editor')}}
				<?php Theme::widget()->add('user.home.feeds', ['user-feeds'] )?>
            {{Theme::widget()->get('user-feeds')}}
			</div>
			<div id="" class="appendix hidden-xs">
			    @if(!Config::get('activity', true))
					<?php echo Theme::widget()->get('blank-activity'); ?>
				@endif
			</div>
			<div id="appendix" class="appendix hidden-xs">
			@if(Config::get('blank-suggestion-adscolumn', true))
				{{Theme::section('appendix.suggestion')}}
			@endif
				{{Theme::section('appendix.ads')}}
			</div>
</div>