<div id="preview-card" class="user-popover">
    <div class="cover">
        <img class="" src="{{(!empty($user->cover)) ? $user->present()->coverImage() : Theme::asset()->img('theme/images/profile-cover.jpg')}}"/>
    </div>


    <div  class="media">
                    <div class="media-object pull-left">
                       <a data-ajaxify="true" href="{{$user->present()->url()}}"> <img src="{{$user->present()->getAvatar(150)}}"/></a>
                    </div>
                    <div class="media-body">

                        <a data-ajaxify="true" href="{{$user->present()->url()}}"><h4 class="media-heading">{{$user->username}}</h4></a>
                        
                    </div>
                </div>


</div>
@if(Auth::check())
<div class="popover-action-buttons pull-right">
    {{Theme::section('connection.buttons', ['user' => $user])}}
</div>
@endif