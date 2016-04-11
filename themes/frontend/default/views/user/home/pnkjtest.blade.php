<?php $favorits = app('App\\Repositories\\FavoriteRepository')->followers(Auth::user()->id, 4); ?>
  
@if(count($favorits))
    <div class="box">
        <div class="box-title">
            {{trans('connection.following')}}
           <?php /* <a href="{{$profileUser->present()->url('connection/following')}}" class="pull-right"><i class="icon ion-more"></i> {{trans('global.view-all')}}</a>*/?>
        </div>
        <div class="box-content">

            <div class="user-tile-list">
                @foreach($favorits as $favorit)

                   {{$favorit->id }}
              <?php /* <a data-ajaxify="true" href="{{$followedUser->toUser->present()->url()}}"><img src="{{$followedUser->toUser->present()->getAvatar(100)}}"/> </a><p>helloo</p>
                 */?>
                @endforeach

            </div>

        </div>
    </div>
@endif
