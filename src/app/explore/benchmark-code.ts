export interface BenchmarkFeatures {
  edgecounter_number_of_edges?: number
  varcounter_number_of_named_variables?: number
  varcounter_number_of_variable_uses_using_getnumuses?: number
  cgscc_passmgr_maximum_cgsccpassmgr_iterations_on_one_scc?: number
  instcount_number_of_add_insts?: number
  instcount_number_of_alloca_insts?: number
  instcount_number_of_bitcast_insts?: number
  instcount_number_of_br_insts?: number
  instcount_number_of_call_insts?: number
  instcount_number_of_fadd_insts?: number
  instcount_number_of_fcmp_insts?: number
  instcount_number_of_fdiv_insts?: number
  instcount_number_of_fmul_insts?: number
  instcount_number_of_fptosi_insts?: number
  instcount_number_of_fsub_insts?: number
  instcount_number_of_getelementptr_insts?: number
  instcount_number_of_icmp_insts?: number
  instcount_number_of_load_insts?: number
  instcount_number_of_mul_insts?: number
  instcount_number_of_phi_insts?: number
  instcount_number_of_ret_insts?: number
  instcount_number_of_sdiv_insts?: number
  instcount_number_of_sext_insts?: number
  instcount_number_of_sitofp_insts?: number
  instcount_number_of_srem_insts?: number
  instcount_number_of_select_insts?: number
  instcount_number_of_store_insts?: number
  instcount_number_of_sub_insts?: number
  instcount_number_of_switch_insts?: number
  instcount_number_of_trunc_insts?: number
  instcount_number_of_unreachable_insts?: number
  instcount_number_of_zext_insts?: number
  instcount_number_of_basic_blocks?: number
  instcount_number_of_non_external_functions?: number
  instcount_number_of_instructions_of_all_types?: number
  'mem2reg_number_of_alloca\'s_promoted_within_one_block'?: number
  mem2reg_number_of_phi_nodes_inserted?: number
  'mem2reg_number_of_alloca\'s_promoted'?: number
  'mem2reg_number_of_alloca\'s_promoted_with_a_single_store'?: number
  instcount_number_of_ashr_insts?: number
  instcount_number_of_and_insts?: number
  instcount_number_of_or_insts?: number
  'mem2reg_number_of_dead_alloca\'s_removed'?: number
  instcount_number_of_lshr_insts?: number
  instcount_number_of_shl_insts?: number
  instcount_number_of_udiv_insts?: number
  instcount_number_of_urem_insts?: number
  instcount_number_of_xor_insts?: number
  instcount_number_of_uitofp_insts?: number
  instcount_number_of_fpext_insts?: number
  instcount_number_of_fptrunc_insts?: number
  instcount_number_of_extractvalue_insts?: number
  instcount_number_of_fptoui_insts?: number
  instcount_number_of_ptrtoint_insts?: number
  instcount_number_of_inttoptr_insts?: number
  instcount_number_of_extractelement_insts?: number
  instcount_number_of_insertelement_insts?: number
  instcount_number_of_shufflevector_insts?: number
  instcount_number_of_indirectbr_insts?: number
}

export interface Benchmark {
  name: string
  suite: string
  content: string
  features: BenchmarkFeatures
}

export interface BenchmarkContainer {
  referenceFeatures: BenchmarkFeatures,
  closestBenchs: Array<Benchmark>
}
