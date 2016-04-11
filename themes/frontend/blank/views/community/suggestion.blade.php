<?php $communities = app('App\\Repositories\\CommunityRepository')->suggest(2)?>

@if(count($communities))

    <div class="box">
        <div class="box-title">{{trans('community.you-may-join')}}</div>
        <div class="box-content box-content-xs">

            @foreach($communities as $community)

                <div class=" user media media">
                      <div class="media-object pull-left">
                           <a   href="{{$community->present()->url()}}" data-ajaxify="true"><img src="{{$community->present()->getlogo()}}"/></a>
                      </div>
                      <div class="media-body">
                          <h5 class="media-heading">{{$community->title}} </h5>
                          <span>{{$community->countMembers()}} {{trans('community.members')}}</span>
                          <span class="pull-right mr">{{$community->countPosts()}} {{trans('post.posts')}}</span>
                      </div>
                </div>

            @endforeach

        </div>
    </div>
@endif