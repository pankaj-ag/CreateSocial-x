<style>
@media (min-width: 992px){
.left-column {width: 170px !important;}
.right-column {width: 500px !important;}
.appendix {width: 240px !important;}
}

.hclm .list-group a{
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
background: none;
border: none;
padding: 0 5px;border-radius: 0;
line-height:21px;
color: #444;
}
.hclm .list-group p{
margin-bottom: 0;font-weight:bold;color: #aaa;
}
.hclm .list-group a:hover{background:#f6f6f6;}
.hclm .list-group i {
font-size:20px;color:#DC615E;margin-right: 7px;
line-height:23px;vertical-align: middle;
}
.hclm .list-group .label {
float:right;
color:#888;
background:none;
font-size: 11px;
}
.hclm .list-group .img img{
height: 16px;
width: 16px;
vertical-align:top;}
</style>
<div class="hclm">
	<div class="list-group"><?php $countMessage = app('App\\Repositories\\MessageRepository')->countNew()?><?php $countNotification = $notificationRepository->count()?>
		<a href="{{URL::route('messages')}}" data-ajaxify="true" class="list-group-item"><span class="img msg"></span>{{trans('blank.messages')}}<span id="messies" class="label label-default">{{($countMessage) ? $countMessage : null}}</span></a>
		<a href="{{URL::route('notifications')}}" data-ajaxify="true" class="list-group-item"><span class="img bl"></span>{{trans('blank.noties')}}<span id="noties" class="label label-default">{{($countNotification) ? $countNotification : null}}</span></a>
		<a href="{{URL::route('discover-mention')}}" data-ajaxify="true" class="list-group-item"><span class="img am"></span>{{trans('blank.mention')}}</a>
		<a href="{{URL::route('discover-post')}}" data-ajaxify="true" class="list-group-item"><span class="img dic"></span>{{trans('blank.discover')}}</a>
		<a href="{{URL::route('invite')}}" data-ajaxify="true" class="list-group-item"><span class="img frs"></span>{{trans('blank.invite')}}</a>
	</div>

	<div class="list-group">
		<p>{{trans('blank.groups')}}</p>
		<?php $communities = app('App\\Repositories\\CommunityRepository')->getJoinedCommunities()?>
		<?php foreach($communities as $member): ?>
			<?php echo Theme::section('blank.leftmencom-display', ['community' => $member->community]); ?>
		<?php endforeach; ?>
		<a href="{{URL::route('communities-joined')}}" data-ajaxify="true" class="list-group-item"><span class="img grj"></span>{{trans('blank.joined')}}</a>
		<a href="{{URL::to('/')}}/search/communities" data-ajaxify="true" class="list-group-item"><span class="img grs"></span>{{trans('blank.find-comms')}}</a>
		<br>
		<?php $communities = app('App\\Repositories\\CommunityRepository')->getMyCommunities()?>
			<?php foreach($communities as $community): ?>
				<?php echo Theme::section('blank.leftmencom-display', ['community' => $community]); ?>
			<?php endforeach; ?>
		<?php echo $communities->links(); ?>
		<a href="{{URL::route('communities')}}" data-ajaxify="true" class="list-group-item"><span class="img grm"></span>{{trans('blank.my-communities')}}</a>
		<a href="{{URL::route('community-create')}}" data-ajaxify="true" class="list-group-item"><span class="img grc"></span>{{trans('community.create')}}</a>
	</div>
	
	<div class="list-group">
		<p>{{trans('blank.pages')}}</p>
		<a href="{{URL::route('my-pages')}}" data-ajaxify="true" class="list-group-item"><span class="img pm"></span>{{trans('page.my-pages')}}</a>
		<a href="{{URL::to('/')}}/search/pages" data-ajaxify="true" class="list-group-item"><span class="img ps"></span>{{trans('blank.find-pages')}}</a>
		<a href="{{URL::route('pages-create')}}" data-ajaxify="true" class="list-group-item"><span class="img pc"></span>{{trans('page.create-a-page')}}</a>
	</div>
	
	@if(Config::get('enable-blogmenu', true))
	<div class="list-group">
		<p>{{trans('blog::global.blogs')}}</p>
		<a href="<?php echo URL::route('blogs'); ?>" data-ajaxify="true" class="list-group-item"><span class="img bm"></span>{{trans('blog::global.view-blogs')}}</a>
		<?php if(Auth::check() and (Config::get('allow-non-admin-create-blog', true) or Auth::user()->isAdmin())): ?>
			<a href="<?php echo Auth::user()->present()->url('blogs'); ?>" data-ajaxify="true" class="list-group-item"><span class="img bs"></span>{{trans('blog::global.view-my-blogs')}}</a>
			<a href="<?php echo URL::route('blog-add'); ?>" ><span class="img bc"></span>{{trans('blog::global.add-new-blog')}}</a>
		<?php endif; ?>
	</div>
	@endif
	
    @if(!Config::get('disable-game', true))
	<div class="list-group">
		<p>{{trans('blank.games')}}</p>
		<a href="{{URL::route('my-games')}}" data-ajaxify="true" class="list-group-item"><span class="img gm"></span>{{trans('game.my-games')}}</a>
		<a href="{{URL::to('/')}}/search/games" data-ajaxify="true" class="list-group-item"><span class="img gs"></span>{{trans('blank.find-games')}}</a>
		<a href="{{URL::route('games-create')}}" data-ajaxify="true" class="list-group-item"><span class="img ga"></span>{{trans('game.add-games')}}</a>
	</div>
	@endif
</div>