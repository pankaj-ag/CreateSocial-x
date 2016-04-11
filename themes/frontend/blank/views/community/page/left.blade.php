
<div class="box">
						
				<div class="box-title"">
					{{$community->title}}
				</div>
    <div class="nav-box">
        <ul class="nav">
            <li><a data-ajaxify="true" href="{{$community->present()->url()}}">{{trans('community.all-post')}}</a> </li>

            @foreach($community->categories as $category)
                <li class="category-{{$category->id}}">

                    <a data-ajaxify="true" href="{{$community->present()->url('category/'.$category->slug)}}"><i class="icon ion-ios-arrow-thin-right"></i> {{$category->title}}</a>
                    @if($community->isOwner())
                        <a href="javascript:void(0)" class="community-category-remove" data-id="{{$category->id}}" style="display: inline;position:absolute;top: 0;right: 0"><i class="icon ion-android-close"></i></a>
                    @endif
                 </li>
            @endforeach

            @if($community->isOwner())
                <li>
                    <a  href="" class="community-create-category-button"><i class="icon ion-plus"></i> {{trans('community.add-category')}}</a>
                    <form data-id="{{$community->id}}" class="community-create-category-form" action="" method="post">
                        <input class="form-control input-sm" type="text" placeholder="Category name"/>
                        <button class="btn btn-success btn-xs"><i class="icon ion-plus"></i> {{trans('global.add')}}</button>
                    </form>

                 </li>
            @endif

           

        </ul>
    </div>
	
	
</div>

<div class="box">
    <div class="box-title">{{trans('community.members')}} ({{$community->countMembers()}}) <a class="pull-right" href="{{$community->present()->url('members')}}"><i class="icon ion-more"></i> {{trans('global.more')}}</a> </div>
    <div class="box-content box-content-xs">
            <div class="user-tile-list">
                <a data-ajaxify="true" href="{{$community->user->present()->url()}}"><img src="{{$community->user->present()->getAvatar(100)}}"/> </a>
                <?php $count = 0;?>
                @foreach($community->members->take(6) as $member)

                        <a data-ajaxify="true" href="{{$member->user->present()->url()}}"><img src="{{$member->user->present()->getAvatar(100)}}"/> </a>

                @endforeach

            </div>
    </div>
</div>
