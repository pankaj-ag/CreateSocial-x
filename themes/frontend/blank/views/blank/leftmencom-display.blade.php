<a href="{{$community->present()->url()}}" data-ajaxify="true" class="list-group-item"><span class="img list"><img src="{{$community->present()->getLogo()}}"/></span>{{Str::limit($community->title, 30)}}</a>