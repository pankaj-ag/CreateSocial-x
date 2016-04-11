<?php $users = app('App\\Repositories\\UserRepository')->suggest(6)?>
@if(count($users))
    <div class="blank box">
        <div class="box-title">{{trans('user.people-you-know')}} <a data-ajaxify="true" class="pull-right " href="{{URL::route('suggestion', ['type' => 'people'])}}"><i class="icon ion-more"></i> {{trans('global.more')}}</a> </div>
        <div class="box-content">

            @foreach($users as $user)
                {{Theme::section('user.displayblank', ['user' => $user, 'mini' => true, 'miniActions' => true])}}
            @endforeach
        <span class="clearfix"></span>
		</div>
    </div>
@endif