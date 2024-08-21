
	//open the lateral panel
	$('.cd-btn').on('click', function(event){
		event.preventDefault();
		
		
		var getNoteid = $(this).attr('nid');
		var gri = $(this).attr('gri');
		var getType = $(this).attr('ntype');
		var getLevel = $(this).attr('nlevel');
		var proceed = true;
		
		
		
		
		
		
        if((getNoteid=="") || (getNoteid==" ")){ 
            proceed = false;
        }
           
		//loading
		if(getLevel){
			getpath = "";
		}else{
			getpath = "../";
		}
		
		data1 = "<div><img src='"+getpath+"images/loading.gif'></div>"
		$('.cd-panel-content').html(data1);	    
        
        if(proceed){
			
         $noteid = "note"+getNoteid;  

		if(getNoteid){
			var fpath = 'notes_to_the_financial_statements.html #'+$noteid;
			
		}
		
			
			
			
			
		//$(function(){
			$(".cd-panel-content").load(fpath, function() {
        	$(this).html($(this).html().replace('button', 'span'));
			$(this).html($(this).html().replace('class="collapse" aria-expanded="false"', 'class="" aria-expanded="false"'));
    }); 
//});
			
			
			
			
		}
		
		
		$('.cd-panel').addClass('is-visible');
	});
	
	//close the lateral panel
	$('.cd-panel').on('click', function(event){
		if( $(event.target).is('.cd-panel') || $(event.target).is('.cd-panel-close') ) { 
			$('.cd-panel').removeClass('is-visible');
			event.preventDefault();
		}
	});
	
	/*******  Custom scripts ******/



