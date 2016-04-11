<div class="container page-content clearfix">
	<div class="merge clearfix">
		<div id="profile-header" data-id="{{$page->id}}" class="profile-header" style=" {{(!empty($page->cover)) ? 'background: url('.$page->present()->coverImage().')' : null}}" >
			<div id="page-profile-cover" data-id="{{$page->id}}" class="profile-cover" style="{{(!empty($page->cover)) ? 'background: url('.$page->present()->coverImage().')' : null}}" ></div>
			<input type="hidden" id="cropped-cover-image">
			<div class="shade hidden-xs"></div>
			<div class="container">
				<div class="profile-info">
					<div class="avatar">
						@if(Auth::check() and ($page->isOwner() or $page->present()->isAdmin() or $page->present()->isEditor()))
						<a class="change-photo-button"  data-ajaxify="true"  href="{{$page->present()->url('edit')}}"><i class="icon ion-android-camera"></i></a>
						@endif

						<a class="preview-image" rel="profile-images" href="{{$page->present()->getAvatar(600)}}"><img src="{{$page->present()->getAvatar(600)}}"/></a>
					</div>
					<h4 class="title">{{$page->title}} {{Theme::section('page.verified', ['page' => $page])}}</h4>
				</div>


			</div>
			<div class="profile-nav">
				<div class="container">
					<ul class="nav">
						<li class="{{(Request::segment(3) == '') ? 'active' : null}}"><a data-ajaxify="true" href="{{$page->present()->url()}}">{{trans('global.timeline')}}</a> </li>

						<li class="{{(Request::segment(3) == 'photos') ? 'active' : null}}"><a data-ajaxify="true" href="{{$page->present()->url('photos')}}">{{trans('photo.photos')}}</a> </li>
						@if(Auth::check() and $page->isOwner())
							@if(Config::get('page-design'))
								<li class="{{(Request::segment(3) == 'design') ? 'active' : null}}"><a data-ajaxify="true" href="{{$page->present()->url('design')}}">{{trans('global.design')}}</a> </li>
							@endif
						@endif
						<!--<li class="{{(Request::segment(3) == 'followers') ? 'active' : null}}"><a data-ajaxify="true" href="{{$page->present()->url('connection/followers')}}">Photos</a> </li>-->

					</ul>

					<div class="profile-nav-right ">


							<?php $hasLike = $page->hasLiked()?>

							<a  data-is-login="{{Auth::check()}}" data-status="{{($hasLike) ? '1' : 0}}" class="btn btn-default btn-sm like-button" data-like="{{trans('like.like')}}" data-unlike="{{trans('like.unlike')}}" data-id="{{$page->id}}" data-type="page" href=""><i class="icon ion-thumbsup"></i> <span>{{($hasLike) ? trans('like.unlike') : trans('like.like')}}</span></a>

						@if(Auth::check() and $page->isOwner())
								<span class="change-profile-cover">
									<a title="Change profile cover" class="btn btn-default btn-sm" id="change-profile-cover" href="javascript:void(0)"><i class="ion ion-android-image"></i> {{trans('page.change-cover')}}</a>
								</span>
						@endif
							@if(Auth::check())
								<span class="dropdown">
										<a data-toggle="dropdown" href="" class="btn btn-sm btn-success dropdown-toggle"><i class="icon ion-arrow-down-b"></i></a>
										<ul class="dropdown-menu pull-right">

											@if (Auth::check() and !$page->isOwner())
											<li><a href="{{URL::route('report', ['type' => 'page'])}}?url={{$page->present()->url()}}">{{trans('page.report-page')}}</a> </li>

											@endif
											<li class="dropdown-divider"></li>
											@if(Auth::check() and ($page->isOwner() or $page->present()->isAdmin() or $page->present()->isEditor()))

											<li><a data-ajaxify="true" href="{{$page->present()->url('edit')}}">{{trans('page.edit-page')}}</a> </li>
											<li><a data-ajaxify="true" href="{{$page->present()->url('design')}}">{{trans('page.design-page')}}</a></li>
											@endif

											@if(Auth::check() and ($page->isOwner() or $page->present()->isAdmin()))

											<li><a data-ajaxify="trues" href="{{$page->present()->url('roles')}}">{{trans('page.page-roles')}}</a> </li>
											@endif

											@if(Auth::check() and $page->isOwner())
												<li><a class="page-delete-button" data-ajaxify="trues" href="{{URL::route('pages-delete', ['id' => $page->id])}}">{{trans('page.delete-page')}}</a> </li>
											@endif
										</ul>
									</span>
							@endif
					</div>
				</div>
			</div>
		</div>
		@if (isset($error) or isset($singleColumn))
		{{$content}}
		@else
		<div id="stick" class="left-column hidden-xs">
			{{Theme::section('page.profile.side')}}
			{{Theme::section('page.profile.side-likes')}}
			{{Theme::widget()->get('page-profile')}}

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