<ul class="nav user-action-buttons">
    {{Theme::extend('page-side-menu-list')}}
</ul>

<div class="box">
    <div class="box-content box-content-md">
        <table class="table table-borderless">
            <tbody>
				<tr>
					<td class="text-center"><i class="icon ion-thumbsup"></i></td>
					<td><div class="page-like"><span class="post-like-count-{{$page->id}}">{{$page->countLikes()}}</span> {{trans('like.likes')}}</div></td>
				</tr>
				
				<tr>
					<td class="text-center"><i class="icon ion-bookmark"></i></td>
					<td>{{trans('user.date-created')}} <span class="post-time" ><span title="{{$page->present()->joinedOn()}}">{{$page->created_at}}</span></span> </td>
				</tr>


				@if($page->description)
					<tr>
						<td class="text-center"><i class="icon ion-plus"></i></td>
						<td>{{$page->description}}</td>
					</tr>
				@endif

				@if($page->website)
					<tr>
						<td class="text-center"><i class="icon ion-ios-world-outline"></i></td>
						<td>{{trans('global.website')}} {{trans('blank.is')}} <a href="{{$page->website}}">{{$page->website}}</a> </td>
					</tr>
				@endif

				@foreach($page->present()->fields() as $field)
					<?php $value = $page->present()->field($field->id)?>

					@if($value)
						<tr>
							<td class="text-center"><?php echo html_entity_decode($field->name); ?></td>
							<td>{{$page->present()->field($field->id)}}</td>
						</tr>
					@endif
				@endforeach
            </tbody>
        </table>
    </div>
	
	   @if(Auth::check())
		<div class="friends-inviter">
			<div class="box-title">
				<input data-page-id="{{$page->id}}" type="text" class="form-control page-friends-inviter-search" placeholder="{{trans('page.invite-friends-placeholder')}}"/>
			</div>
			<div class="box-content" data-offset="0"  data-page-id="{{$page->id}}" id="page-inviter-members">
				@foreach(app('App\\Repositories\\PageRepository')->friendsToLike($page->id) as $user)
					{{Theme::section('page.profile.display-invite-user', ['user' => $user, 'page' => $page])}}
				@endforeach
			</div>
		</div>
	@endif
</div>