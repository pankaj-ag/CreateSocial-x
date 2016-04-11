<div class="container page-content clearfix">
	<div class="merge clearfix">
		<div id="profile-header" class="profile-header" style="{{(!empty($profileUser->cover)) ? 'background-image: url('.$profileUser->present()->coverImage().')' : null}}" >
			<div id="profile-cover" class="" style="{{(!empty($profileUser->cover)) ? 'background-image: url('.$profileUser->present()->coverImage().')' : null}}" ></div>
			<input type="hidden" id="cropped-cover-image">
			<div class="shade hidden-xs"></div>
			<div class="container">
				<div class="profile-info">
					<div class="avatar">
						@if(Auth::check() and $profileUser->isOwner())
						<a class="change-photo-button" data-ajaxify="true"  href="{{URL::route('user-account')}}"><i class="icon ion-android-camera"></i></a>
						@endif
						<a class="preview-image" rel="profile-images" href="{{$profileUser->present()->getAvatar(600)}}"><img src="{{$profileUser->present()->getAvatar(600)}}"/></a>
					</div>
					<h3 class="title">{{$profileUser->username}} {{Theme::section('user.verified', ['user' => $profileUser])}}</h3>
				</div>

			</div>
			<div class="profile-nav">
				<div class="container">
					<ul class="nav">
						<li class="{{(Request::segment(2) == '') ? 'active' : null}}"><a data-ajaxify="true" href="{{$profileUser->present()->url()}}">{{trans('global.timeline')}}</a> </li>
						<li class="{{(Request::segment(3) == 'friends') ? 'active' : null}}"><a data-ajaxify="true" href="{{$profileUser->present()->url('connection/friends')}}"> {{$profileUser->countFriends()}} {{trans('connection.friends')}}</a> </li>
						<li class="{{(Request::segment(3) == 'followers') ? 'active' : null}}"><a data-ajaxify="true" href="{{$profileUser->present()->url('connection/followers')}}">{{$profileUser->countFollowers()}} {{trans('connection.followers')}}</a> </li>

						<li class="{{(Request::segment(2) == 'photos' or Request::segment(2) == 'album') ? 'active' : null}}"><a data-ajaxify="true" href="{{$profileUser->present()->url('photos')}}">{{$profileUser->countPhotos()}} {{trans('photo.photos')}}</a> </li>
						{{Theme::extend('user-profile-menu')}}
					</ul>
				</div>
			</div>
		</div>
								<div class="btn-frame clearfix">
									<div class="propa pull-right">
										<div class="btn-group" role="group" aria-label="...">
											@if($profileUser->present()->canSendMessage())
											  <a href="" data-userid="{{$profileUser->id}}" data-label="{{trans('message.send-message')}}" class="btn btn-xs send-message-button">{{trans('message.send-message')}}</a>
											@endif
											{{Theme::section('connection.buttons', ['user' => $profileUser])}}
											@if(Auth::check())
												  <div class="btn-group" role="group">
													<a class="btn btn-default btn-xs dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
													   &#160;<i class="icon ion-android-more-horizontal"></i>&#160;
													</a>
													<ul class="dropdown-menu pull-right">
														@if (Auth::check() and Auth::user()->id != $profileUser->id)
													  <li><a href="{{URL::route('report', ['type' => 'profile'])}}?url={{$profileUser->present()->url()}}">{{trans('user.report-profile')}}</a></li>
													  <li><a data-location="profile"  data-userid="{{$profileUser->id}}" class="block-user" href="">{{trans('user.block-user')}}</a></li>
														@endif
													  @if(Auth::check() and $profileUser->id == Auth::user()->id)
														<li class="dropdown-divider"></li>
														<li><a data-ajaxify="trues" href="{{URL::route('edit-profile')}}">{{trans('user.edit-profile')}}</a></li>
														<li><a data-ajaxify="true" href="{{URL::route('user-design')}}">{{trans('user.design-your-page')}}</a> </li>
													  @endif
													</ul>
												  </div>
											@endif
										</div>
											
											@if(Auth::check() and $profileUser->id == Auth::user()->id)
													<span class="change-profile-cover">
														<a title="Change profile cover" class="change-profile-cover" id="change-profile-cover-button" href="javascript:void(0)"><i class="icon ion-android-camera"></i></a>
													</span>
											@endif										
									</div>
								</div>
		@if (isset($error) or isset($singleColumn))
		{{$content}}
		@else
			<div id="stick" class="left-column hidden-xs">
				{{Theme::section('profile.side-content')}}
				{{Theme::section('connection.side-lists', ['user' => $profileUser])}}
				{{Theme::section('photo.side', ['user' => $profileUser])}}
				{{Theme::widget()->get('user-profile')}}

			</div>

			<div class="right-column">
				{{$content}}
			</div>
		@endif
</div>
			<div id="appendix" class="appendix hidden-xs">
				{{Theme::section('appendix.ads')}}
			</div>
</div>