

// JavaScript Document
 var url = window.location.pathname;
 var filename = url.substr(url.lastIndexOf('/') + 1);

 var pagelist = [];
								pagelist[0] = "index.html";
								pagelist[1] = "about_the_report.html";
								pagelist[2] = "about_slt.html";
								pagelist[3] = "highlights_of_the_year.html";

								pagelist[4] = "group_chairmans_message.html";
								pagelist[5] = "group_chief_executive_officers_message.html";
								pagelist[6] = "chief_executive_officers_review.html";
								pagelist[7] = "chief_operating_officers_review.html";

								pagelist[8] = "a_roadmap_to_smart_sri_lanka.html";

								pagelist[9] = "operating_environment.html";
								pagelist[10] = "strategy.html";
								pagelist[11] = "value_creation_model.html";
								pagelist[12] = "stakeholders.html";

								pagelist[13] = "financial_capital.html";
								pagelist[14] = "institutional_capital.html";
								pagelist[15] = "investor_capital.html";
								pagelist[16] = "customer_capital.html";
								pagelist[17] = "business_partner_capital.html";
								pagelist[18] = "employee_capital.html";
								pagelist[19] = "social_and_environmental_capital.html";
								pagelist[20] = "regulatory_capital.html";

								pagelist[21] = "board_of_directors.html";
								pagelist[22] = "executive_management.html";
								pagelist[23] = "subsidiary_chief_officers.html";
								pagelist[24] = "corporate_governance.html";
								pagelist[25] = "audit_committee_report.html";
								pagelist[26] = "remuneration_and_nomination_committee_report.html";
								pagelist[27] = "related_party_transactions_review_committee_report.html";
								pagelist[28] = "enterprise_risk_management.html";

								pagelist[29] = "annual_report_of_the_board_of_directors_on_the_affairs_of_the_company.html";
								pagelist[30] = "statement_of_directors_in_relation_to_their_responsibility_for_the_preparation_of_financial_statements.html";
								pagelist[31] = "independent_auditors_report.html";
								pagelist[32] = "statement_of_profit_or_loss_and_other_comprehensive_income.html";
								pagelist[33] = "statement_of_financial_position.html";
								pagelist[34] = "statement_of_changes_in_equity_group.html";
								pagelist[35] = "statement_of_changes_in_equity_company.html";
								pagelist[36] = "cash_flow_statement.html";
								pagelist[37] = "notes_to_the_financial_statements.html";

								pagelist[38] = "ten_year_progress.html";
								pagelist[39] = "portfolio_of_lands.html";
								pagelist[40] = "gri_content_index.html";
								pagelist[41] = "abbreviations.html";
								pagelist[42] = "notice_of_annual_general_meeting.html";
								pagelist[43] = "corporate_information.html";
				


								

var minv = 0;
var maxv = 44;

function arraySearch(arr,val) {
    for (var i=0; i<arr.length; i++)
        if (arr[i] === val)                    
            return i;
    return false;
  }



var scrnwidth = window.innerWidth;

if (scrnwidth > 480) {
	
}




function PageInfoLst(pren,nxtn){

	if(pren == 1){pagetitle1 = "About the Report", pageurl1 = '../about_slt/about_the_report.html'}
	if(nxtn == 1){pagetitle2 = "About the Report", pageurl2 = '../about_slt/about_the_report.html'}
	if(pren == 2){pagetitle1 = "About SLT", pageurl1 =  '../about_slt/about_slt.html'}
	if(nxtn == 2){pagetitle2 = "About SLT", pageurl2 =  '../about_slt/about_slt.html'}
	if(pren == 3){pagetitle1 = "Highlights of the Year", pageurl1 = '../about_slt/highlights_of_the_year.html'}
	if(nxtn == 3){pagetitle2 = "Highlights of the Year", pageurl2 = '../about_slt/highlights_of_the_year.html'}
	
	if(pren == 4){pagetitle1 = "Group Chairman’s Message", pageurl1 = '../messages/group_chairmans_message.html'}
	if(nxtn == 4){pagetitle2 = "Group Chairman’s Message", pageurl2 = '../messages/group_chairmans_message.html'}
	if(pren == 5){pagetitle1 = "Group Chief Executive Officer’s Message", pageurl1 = '../messages/group_chief_executive_officers_message.html'}
	if(nxtn == 5){pagetitle2 = "Group Chief Executive Officer’s Message", pageurl2 = '../messages/group_chief_executive_officers_message.html'}
	if(pren == 6){pagetitle1 = "Chief Executive Officer’s Review", pageurl1 = '../messages/chief_executive_officers_review.html'}
	if(nxtn == 6){pagetitle2 = "Chief Executive Officer’s Review", pageurl2 = '../messages/chief_executive_officers_review.html'}
	if(pren == 7){pagetitle1 = "Chief Operating Officer’s Review", pageurl1 = '../messages/chief_operating_officers_review.html'}
	if(nxtn == 7){pagetitle2 = "Chief Operating Officer’s Review", pageurl2 = '../messages/chief_operating_officers_review.html'}
	
	if(pren == 8){pagetitle1 = "A Road Map to Smart Sri Lanka", pageurl1 = '../a_roadmap_to_smart_sri_lanka/a_roadmap_to_smart_sri_lanka.html'}
	if(nxtn == 8){pagetitle2 = "A Road Map to Smart Sri Lanka", pageurl2 = '../a_roadmap_to_smart_sri_lanka/a_roadmap_to_smart_sri_lanka.html'}
	
	if(pren == 9){pagetitle1 = "Operating Environment", pageurl1 = '../business_model/operating_environment.html'}
	if(nxtn == 9){pagetitle2 = "Operating Environment", pageurl2 = '../business_model/operating_environment.html'}
	if(pren == 10){pagetitle1 = "Strategy", pageurl1 = '../business_model/strategy.html'}
	if(nxtn == 10){pagetitle2 = "Strategy", pageurl2 = '../business_model/strategy.html'}
	if(pren == 11){pagetitle1 = "Value Creation Model", pageurl1 = '../business_model/value_creation_model.html'}
	if(nxtn == 11){pagetitle2 = "Value Creation Model", pageurl2 = '../business_model/value_creation_model.html'}
	if(pren == 12){pagetitle1 = "Stakeholders", pageurl1 = '../business_model/stakeholders.html'}
	if(nxtn == 12){pagetitle2 = "Stakeholders", pageurl2 = '../business_model/stakeholders.html'}
	
	
	if(pren == 13){pagetitle1 = "Financial Capital", pageurl1 = '../mda/financial_capital.html'}
	if(nxtn == 13){pagetitle2 = "Financial Capital", pageurl2 = '../mda/financial_capital.html'}
	if(pren == 14){pagetitle1 = "Institutional Capital", pageurl1 = '../mda/institutional_capital.html'}
	if(nxtn == 14){pagetitle2 = "Institutional Capital", pageurl2 = '../mda/institutional_capital.html'}
	if(pren == 15){pagetitle1 = "Investor capital", pageurl1 = '../mda/investor_capital.html'}
	if(nxtn == 15){pagetitle2 = "Investor capital", pageurl2 = '../mda/investor_capital.html'}
	if(pren == 16){pagetitle1 = "Customer Capital", pageurl1 = '../mda/customer_capital.html'}
	if(nxtn == 16){pagetitle2 = "Customer Capital", pageurl2 = '../mda/customer_capital.html'}
	if(pren == 17){pagetitle1 = "Business Partner Capital", pageurl1 = '../mda/business_partner_capital.html'}
	if(nxtn == 17){pagetitle2 = "Business Partner Capital", pageurl2 = '../mda/business_partner_capital.html'}
	if(pren == 18){pagetitle1 = "Employee Capital", pageurl1 = '../mda/employee_capital.html'}
	if(nxtn == 18){pagetitle2 = "Employee Capital", pageurl2 = '../mda/employee_capital.html'}
	if(pren == 19){pagetitle1 = "Social and Environmental Capital", pageurl1 = '../mda/social_and_environmental_capital.html'}
	if(nxtn == 19){pagetitle2 = "Social and Environmental Capital", pageurl2 = '../mda/social_and_environmental_capital.html'}
	if(pren == 20){pagetitle1 = "Regulatory Capital", pageurl1 = '../mda/regulatory_capital.html'}
	if(nxtn == 20){pagetitle2 = "Regulatory Capital", pageurl2 = '../mda/regulatory_capital.html'}
				   
	if(pren == 21){pagetitle1 = "Board of Directors", pageurl1 = '../stewardship_and_governance/board_of_directors.html'}
	if(nxtn == 21){pagetitle2 = "Board of Directors", pageurl2 = '../stewardship_and_governance/board_of_directors.html'}
	if(pren == 22){pagetitle1 = "Executive Management", pageurl1 = '../stewardship_and_governance/executive_management.html'}
	if(nxtn == 22){pagetitle2 = "Executive Management", pageurl2 = '../stewardship_and_governance/executive_management.html'}
	if(pren == 23){pagetitle1 = "Subsidiary Chief Officers", pageurl1 = '../stewardship_and_governance/subsidiary_chief_officers.html'}
	if(nxtn == 23){pagetitle2 = "Subsidiary Chief Officers", pageurl2 = '../stewardship_and_governance/subsidiary_chief_officers.html'}
	if(pren == 24){pagetitle1 = "Corporate Governance", pageurl1 = '../stewardship_and_governance/corporate_governance.html'}
	if(nxtn == 24){pagetitle2 = "Corporate Governance", pageurl2 = '../stewardship_and_governance/corporate_governance.html'}
	if(pren == 25){pagetitle1 = "Audit Committee Report", pageurl1 = '../stewardship_and_governance/audit_committee_report.html'}
	if(nxtn == 25){pagetitle2 = "Audit Committee Report", pageurl2 = '../stewardship_and_governance/audit_committee_report.html'}
	if(pren == 26){pagetitle1 = "Remuneration and Nomination Committee Report", pageurl1 = '../stewardship_and_governance/remuneration_and_nomination_committee_report.html'}
	if(nxtn == 26){pagetitle2 = "Remuneration and Nomination Committee Report", pageurl2 = '../stewardship_and_governance/remuneration_and_nomination_committee_report.html'}
	if(pren == 27){pagetitle1 = "Related Party Transactions Review Committee Report", pageurl1 = '../stewardship_and_governance/related_party_transactions_review_committee_report.html'}
	if(nxtn == 27){pagetitle2 = "Related Party Transactions Review Committee Report", pageurl2 = '../stewardship_and_governance/related_party_transactions_review_committee_report.html'}
	if(pren == 28){pagetitle1 = "Enterprise Risk Management (ERM)", pageurl1 = '../stewardship_and_governance/enterprise_risk_management.html'}
	if(nxtn == 28){pagetitle2 = "Enterprise Risk Management (ERM)", pageurl2 = '../stewardship_and_governance/enterprise_risk_management.html'}
	
	if(pren == 29){pagetitle1 = "Annual Report of the Board of Directors on the Affairs of the Company", pageurl1 = '../financial_reporting/annual_report_of_the_board_of_directors_on_the_affairs_of_the_company.html'}
	if(nxtn == 29){pagetitle2 = "Annual Report of the Board of Directors on the Affairs of the Company", pageurl2 = '../financial_reporting/annual_report_of_the_board_of_directors_on_the_affairs_of_the_company.html'}
	if(pren == 30){pagetitle1 = "Statement of Directors in relation to their responsibility for the preparation of Financial Statements", pageurl1 = '../financial_reporting/statement_of_directors_in_relation_to_their_responsibility_for_the_preparation_of_financial_statements.html'}
	if(nxtn == 30){pagetitle2 = "Statement of Directors in relation to their responsibility for the preparation of Financial Statements", pageurl2 = '../financial_reporting/statement_of_directors_in_relation_to_their_responsibility_for_the_preparation_of_financial_statements.html'}
	if(pren == 31){pagetitle1 = "Independent Auditors’ Report", pageurl1 = '../financial_reporting/independent_auditors_report.html'}
	if(nxtn == 31){pagetitle2 = "Independent Auditors’ Report", pageurl2 = '../financial_reporting/independent_auditors_report.html'}
	if(pren == 32){pagetitle1 = "Statement of Profit or Loss and other Comprehensive Income", pageurl1 = '../financial_reporting/statement_of_profit_or_loss_and_other_comprehensive_income.html'}
	if(nxtn == 32){pagetitle2 = "Statement of Profit or Loss and other Comprehensive Income", pageurl2 = '../financial_reporting/statement_of_profit_or_loss_and_other_comprehensive_income.html'}
	if(pren == 33){pagetitle1 = "Statement of Financial Position", pageurl1 = '../financial_reporting/statement_of_financial_position.html'}
	if(nxtn == 33){pagetitle2 = "Statement of Financial Position", pageurl2 = '../financial_reporting/statement_of_financial_position.html'}
	if(pren == 34){pagetitle1 = "Statement of Changes in Equity – Group", pageurl1 = '../financial_reporting/statement_of_changes_in_equity_group.html'}
	if(nxtn == 34){pagetitle2 = "Statement of Changes in Equity – Group", pageurl2 = '../financial_reporting/statement_of_changes_in_equity_group.html'}
	if(pren == 35){pagetitle1 = "Statement of Changes in Equity – Company", pageurl1 = '../financial_reporting/statement_of_changes_in_equity_company.html'}
	if(nxtn == 35){pagetitle2 = "Statement of Changes in Equity – Company", pageurl2 = '../financial_reporting/statement_of_changes_in_equity_company.html'}
	if(pren == 36){pagetitle1 = "Cash Flow Statement", pageurl1 = '../financial_reporting/cash_flow_statement.html'}
	if(nxtn == 36){pagetitle2 = "Cash Flow Statement", pageurl2 = '../financial_reporting/cash_flow_statement.html'}
	if(pren == 37){pagetitle1 = "Notes to the Financial Statements", pageurl1 = '../financial_reporting/notes_to_the_financial_statements.html'}
	if(nxtn == 37){pagetitle2 = "Notes to the Financial Statements", pageurl2 = '../financial_reporting/notes_to_the_financial_statements.html'}
				  
	if(pren == 38){pagetitle1 = "Ten year progress – Group", pageurl1 = '../supplementary_information/ten_year_progress.html'}
	if(nxtn == 38){pagetitle2 = "Ten year progress – Group", pageurl2 = '../supplementary_information/ten_year_progress.html'}
	if(pren == 39){pagetitle1 = "Portfolio of Lands", pageurl1 = '../supplementary_information/portfolio_of_lands.html'}
	if(nxtn == 39){pagetitle2 = "Portfolio of Lands", pageurl2 = '../supplementary_information/portfolio_of_lands.html'}
	if(pren == 40){pagetitle1 = "GRI Content Index", pageurl1 = '../supplementary_information/gri_content_index.html'}
	if(nxtn == 40){pagetitle2 = "GRI Content Index", pageurl2 = '../supplementary_information/gri_content_index.html'}
	if(pren == 41){pagetitle1 = "Abbreviations", pageurl1 = '../supplementary_information/abbreviations.html'}
	if(nxtn == 41){pagetitle2 = "Abbreviations", pageurl2 = '../supplementary_information/abbreviations.html'}
	if(pren == 42){pagetitle1 = "Notice of Annual General Meeting", pageurl1 = '../supplementary_information/notice_of_annual_general_meeting.html'}
	if(nxtn == 42){pagetitle2 = "Notice of Annual General Meeting", pageurl2 = '../supplementary_information/notice_of_annual_general_meeting.html'}
	if(pren == 43){pagetitle1 = "Corporate Information", pageurl1 = '../supplementary_information/corporate_information.html'}
	if(nxtn == 43){pagetitle2 = "Corporate Information", pageurl2 = '../supplementary_information/corporate_information.html'}


				 
}

	
	
	
	
	
	

	function pageDet(pren,nxtn){
	
	
	PageInfoLst(pren,nxtn);
	
		
		
		
	if((pren) && (pren > minv)){
	preval = '<a href="'+pageurl1+'"><div class="featured-item feature-icon icon-hover icon-hover-blue icon-circle icon-outline"><div class="icon"><i class="fa fa-angle-left" aria-hidden="true"></i></div><div class="desc"><h2>Previous Page</h2><p>'+pagetitle1+'</p></div></div</a>';
	$('#prelink').html(preval);
	}
	if((nxtn)&& (nxtn<maxv)){
	nextval = '<a href="'+pageurl2+'"><div class="featured-item feature-icon icon-hover icon-hover-blue icon-circle icon-outline"><div class="icon"><i class="fa fa-angle-right" aria-hidden="true"></i></div><div class="desc"><h2>Next Page</h2><p>'+pagetitle2+'</p></div></div></a>';					
	$('#nextlink').html(nextval);
	}
	

}



pid = arraySearch(pagelist,filename);


var pren = pid - 1;

var nxtn = pid + 1;



pageDet(pren,nxtn);



	


	
$(function() {

		//download
//download pdf
	$("#downloadpdf").click(function (e) {
	
	var url = window.location.pathname;
	var filename = url.substr(url.lastIndexOf('/') + 1);
	var tempString = filename.substring(0, filename.length - 4);
		tempString = tempString.replace(/\-/g, '_');
		filename = tempString+'pdf';

window.open(
  '../download/'+filename,
  '_blank' 
);
});
	
//download pdf
$("#fullreport").click(function (e) {
window.open(
  '../download/Sri Lanka_Telecom_PLC_Annual Report_2019.pdf',
  '_blank' 
);
});	
	

});
	


	
