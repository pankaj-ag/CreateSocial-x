<div class="container page-content clearfix">
		<div class="left-column hidden-xs">
		@if(Auth::check())
			{{Theme::section('user.side-info')}}
			{{Theme::section('blank.left-menu')}}
		@endif
		</div>
		<div class="right-column">
			<div class="box">
				<div  class="community-cover" style="background: url({{$community->present()->getLogo()}})">
					<div data-id="{{$community->id}}" style="background: url({{$community->present()->getLogo()}})" id="croppic-community-cover"></div>
					<input type="hidden" id="community-cropped-cover-image"/>
					@if($community->present()->isAdmin())
						<a id="change-community-cover" href="javascript:void(0)" class="btn btn-success btn-xs" style="margin: 10px 10px">{{trans('community.change-cover')}}</a>

						<a href="{{$community->present()->url('edit')}}" class="btn btn-danger btn-xs pull-right" style="margin: 10px 10px">{{trans('global.edit')}}</a>
					@endif



					<div class="cover-footer">
						<i class="icon ion-locked"></i> {{$community->present()->getPrivacy()}}
						 <span class="pull-right">{{$community->countMembers()}} {{trans('community.members')}}</span>
					</div>
				</div>			
						
			</div>
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