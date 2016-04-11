<div class="user media pull-left">
      <div class="media-object pull-left">
		<a data-url="{{$user->present()->popoverUrl()}}" class="user-popover" href="{{$user->present()->url()}}" data-ajaxify="true">
			<img src="{{$user->present()->getAvatar(100)}}"/>
			
		<div class="media-body">
			  <h5 class="media-heading">{{$user->fullname}} {{Theme::section('user.verified', ['user' => $user])}} </h5>
		  {{Theme::extend('user-display', ['user' => $user])}}
		</div>
		</a>
      </div>
</div>