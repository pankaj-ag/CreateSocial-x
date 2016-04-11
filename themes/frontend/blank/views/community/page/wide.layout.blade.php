@if(Auth::check())	
<style>
@media (min-width: 992px){
.merge > .right-column {width: 66% !important;float: left;margin-left: 0;}
.merge {margin-left: 1%;height: 350px;}
.right-column {margin-left:1% !important;}
}
@media (min-width: 768px){
.merge .right-column {width: 98%;}
.right-column {margin-left:0;}
}
@media (max-width: 767px){
.community-cover, #croppic-community-cover {height: 147px;}
}

.profile-nav .container ul.nav {margin-left: 0;}
.profile-header .profile-nav .nav > li.comtitle > a {color: #333;font-size: 15px;padding: 10px;}
.community-cover .cover-footer{background:none;height:45px;}
.shade{bottom: 0;left: 0;}
</style>


<div class="container page-content clearfix">
		
			<div class="left-column hidden-xs">
					{{Theme::section('user.side-info')}}
					{{Theme::section('blank.left-menu')}}
			</div>
		
	<div class="merge clearfix">
	
			<div class="profile-header">
				<div  class="community-cover" style="background: url({{$community->present()->getLogo()}})">
					<div data-id="{{$community->id}}" style="background: url({{$community->present()->getLogo()}})" id="croppic-community-cover"></div>
					<input type="hidden" id="community-cropped-cover-image"/>
						<div class="shade hidden-xs"></div>
					<div class="cover-footer">
						<i class="icon ion-locked"></i> {{$community->present()->getPrivacy()}}
					</div>

				</div>
				<div class="profile-nav">
					<div class="container">
						<ul class="nav">
							<li class="comtitle"><a data-ajaxify="true" href="{{$community->present()->url()}}">{{$community->title}}</a> </li>
							<li class=""><a data-ajaxify="true" href="{{$community->present()->url('about')}}">{{trans('community.about')}}</a> </li>
							@if($community->present()->canInvite())
								<li><a data-ajaxify="true" href="{{$community->present()->url('invite')}}">{{trans('community.invite-members')}}</a> </li>
							@endif
							<li class=""><a data-ajaxify="true" href="{{$community->present()->url('members')}}">{{$community->countMembers()}} {{trans('community.members')}}</a> </li>
						</ul>
					</div>
				</div>
			</div>
								<div class="btn-frame clearfix">
									<div class="propa pull-right">
										<div class="btn-group" role="group" aria-label="...">
											
												@if($community->present()->isMember())
															<?php $nStatus = $community->present()->canReceiveNotification()?>

															<a data-userid="{{Auth::user()->id}}" data-on="On Notifications" data-status="{{$nStatus}}" data-off="Off Notifications" class="toggle-notification-receiver btn btn-xs" data-type="community" data-type-id="{{$community->id}}" href="">
																<span>
																	@if ($nStatus)
																		{{trans('notification.off-notifications')}}
																	@else
																		{{trans('notification.on-notifications')}}
																	@endif
																</span>
															</a>

												@endif
												@if(!$community->isOwner() and $community->present()->isMember())
													<a href="{{URL::route('leave-community', ['id' => $community->id])}}" class="btn btn-xs">{{trans('community.leave')}}</a>
												@endif
											
											
												  <div class="btn-group" role="group">
													<a class="btn btn-default btn-xs dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
													   &#160;<i class="icon ion-android-more-horizontal"></i>&#160;
													</a>
													<ul class="dropdown-menu pull-right">
													
														@if($community->isOwner())
															<li> <a data-ajaxify="true" href="{{$community->present()->url('edit')}}" >{{trans('community.edit')}}</a></li>
														@else
															<li><a href="{{URL::route('report', ['type' => 'community'])}}?url={{$community->present()->url()}}"><i class="icon ion-flag"></i> {{trans('community.report')}}</a> </li>
														@endif
													  
													</ul>
												  </div>
											
										</div>
											
												@if($community->present()->isAdmin())
													<span class="change-profile-cover">
														<a title="Change profile cover" class="" id="change-community-cover" href="javascript:void(0)"><i class="icon ion-android-camera"></i></a>
													</span>
												@endif									
									</div>
								</div>


			
						
	</div>
	
	
	

		
		<div class="right-column">
			@if (!$community->present()->isMember() and $community->present()->canJoin())
				<div class="community-join-panel box">
					<a class="btn btn-danger btn-sm join-community pull-right" data-id="{{$community->id}}" href="">{{trans('community.join')}}</a>
				</div>
			@endif
			{{$content}}

			{{Theme::section('community.page.history')}}
		</div>

			
		<div id="appendix" class="appendix hidden-xs">
			{{Theme::section('community.page.left')}}
			{{Theme::section('appendix.ads')}}
		</div>
		
	</div>

		
		
		
</div>
@endif