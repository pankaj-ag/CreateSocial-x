@if(count($user->photos))
    <div class="box">
        <div class="box-title">{{trans('photo.recent-photos')}} <a href="{{$profileUser->present()->url('photos')}}" data-ajaxify="true" class="pull-right"><i class="icon ion-chatbox"></i> More</a> </div>
        <div class="box-content side-photos clearfix">

                @foreach($user->photos->take(4) as $photo)
                    <a class="preview-image" rel="album" href="{{Image::url($photo->path, '600')}}"><img src="{{Image::url($photo->path, 150)}}"/></a><p>hello</p>
                @endforeach


        </div>
    </div>
@endif