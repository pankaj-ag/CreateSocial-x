<div class="box">
	<div class="box-content box-content-md">
    @if($profileUser->isOwner())
        <a href="{{URL::route('edit-profile')}}" data-ajaxify="true" class="pull-right"><i class="icon ion-edit"></i></a>
	@endif

        <table class="table table-borderless">
            <tbody>
                <tr>
                    <td class="text-center"><i class="icon ion-bookmark"></i></td>
                    <td><span class="post-time" >{{trans('user.date-joined')}}  <span title="{{$profileUser->present()->joinedOn()}}">{{$profileUser->created_at}}</span></span></td>
                </tr>

                <tr>
                    <td class="text-center"><i class="icon ion-android-time"></i></td>
                    <td>{{trans('blank.last-log')}} <span class="post-time" ><span title="{{$profileUser->present()->lastLoginOn()}}">{{$profileUser->updated_at}}</span></span></td>
                </tr>
                @if(Config::get('user-enable-birth-date', 1))
                    @if($profileUser->birth_day)
                        <tr>
                            <td class="text-center"><i class="icon ion-android-exit"></i>
                            <td>
                                {{trans('month.born-on')}}: {{getMonthName($profileUser->birth_month)}}, {{$profileUser->birth_day}}

                                @if($profileUser->present()->canSeeBirth())
                                    ,{{$profileUser->birth_year}} ({{getProperAge($profileUser->birth_year, $profileUser->birth_day, $profileUser->birth_month)}} {{trans('month.years-old')}})
                                @endif
                            </td>
                        </tr>
                    @endif
                @endif
               @if($profileUser->country)
                    <tr>
                        <td class="text-center"><i class="icon ion-ios-location"></i></td>
                        <td>{{trans('blank.from')}} {{ucwords($profileUser->country)}}</td>
                    </tr>
               @endif

               @if($profileUser->city)
                <tr>
                    <td class="text-center"><i class="icon ion-android-home"></i></td>
                    <td>{{trans('blank.lives-in')}} {{ucwords($profileUser->city)}}</td>
                </tr>
               @endif

                @if($profileUser->genre)
                <tr>
                    <td class="text-center"><i class="icon ion-{{trans('blank.'.$profileUser->genre)}}"></i></td>
                    <td>{{$profileUser->username}} {{trans('blank.is')}} {{trans('global.'.$profileUser->genre)}}</td>
                </tr>
                @endif
                @if($profileUser->bio)
                    <tr>
                        <td class="text-center"><i class="icon ion-plus"></i></td>
                        <td>{{$profileUser->bio}}</td>
                    </tr>
                @endif

                @foreach($profileUser->present()->fields() as $field)
                    <?php $value = $profileUser->present()->profile($field->id)?>
                    @if(!empty($value))
                        <tr>
                            <td class="text-center"><i class="icon ion-plus"></i></td>
                            <td>{{$field->name}}: {{$profileUser->present()->profile($field->id)}}</td>
                        </tr>
                    @endif
                @endforeach

            </tbody>

        </table>


	</div>
</div>