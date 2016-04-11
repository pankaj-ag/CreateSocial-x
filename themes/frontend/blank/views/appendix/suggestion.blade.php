<?php $users = app('App\\Repositories\\UserRepository')->suggest(6)?>
@if(count($users))
    <div class="blank box">
        <div class="box-title">{{trans('user.people-you-know')}} <a data-ajaxify="true" class="pull-right " href="{{URL::route('suggestion', ['type' => 'people'])}}"><i class="icon ion-more"></i> </a> </div>
			<div class="box-content">
				@foreach($users as $user)
					<div class="user media pull-left" style="  width: 76px;height: 76px;">
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
				@endforeach
				<span class="clearfix"></span>
			</div>
    </div>
@endif